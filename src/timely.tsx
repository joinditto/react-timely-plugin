import React, { Fragment, useState } from 'react'

import { ReactComponent as Loader } from './assets/loader.svg'
import TimelyModal from './components/TimelyModal'

type Optional<T extends object> = {
  [P in keyof T]?: T[P]
}

export type Embed = Optional<{
  embed_domain: string
  embed_path: string
  embed_type: 'popup' | 'inline'
}>

export type Prefill = Optional<{
  name: string
  email: string
  phone: string
  product: string
  query: string
  date: Date
}>

export type Utm = Optional<{
  utm_campaign: string
  utm_source: string
  utm_medium: string
  utm_content: string
  utm_term: string
  ref: string
  referral_url: string
  referral_code: string
}>

export type IframeTitle = string

interface TimelyWidgetProps {
  url: string
  prefill?: Prefill
  utm?: Utm
  iframeTitle?: IframeTitle
  embed?: Embed
}

interface TimelyWidgetState {
  isOpen: boolean
  content: JSX.Element | null
}

class TimelyWidget extends React.Component<any, TimelyWidgetState> {
  static singletonRef: any

  constructor(props: any) {
    super(props)

    this.state = {
      isOpen: false,
      content: null
    }

    TimelyWidget.singletonRef = this
  }

  /**
   *
   * @param event
   */
  handleMessage = (event: any) => {
    const { data } = event
    if (data.from === 'timely') {
      if (data.action === 'confirm-close') {
        this.setState({ isOpen: false })
      }
    }
  }

  // we have to handle close confirmations from the iframe loaded listening for such a message
  componentDidMount(): void {
    window.addEventListener('message', this.handleMessage, false)
  }

  // free up the event listeners on unmount
  componentWillUnmount(): void {
    window.removeEventListener('message', this.handleMessage)
  }

  show = (props: TimelyWidgetProps) => {
    this.setState({
      isOpen: true,
      content: <TimelyIframe {...props} />
    })
  }

  close = () => {
    this.setState({ isOpen: false })
    if (window && window.document) {
      const timelyIframe: HTMLIFrameElement | null =
        window?.document?.getElementById('timely-iframe') as HTMLIFrameElement

      if (timelyIframe) {
        timelyIframe.contentWindow?.postMessage(
          { from: 'react-timely', action: 'close' },
          '*'
        )
      }
    }
  }

  render() {
    const { isOpen } = this.state

    return (
      <TimelyModal isOpen={isOpen} onClose={this.close}>
        <Fragment>{this.state.content}</Fragment>
      </TimelyModal>
    )
  }
}

type TimelyProviderProps = {
  children?: React.ReactNode
}

const TimelyProvider: React.FC<TimelyProviderProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <TimelyWidget />
    </Fragment>
  )
}

export { TimelyProvider }

export const TimelyIframe: React.FC<TimelyWidgetProps> = ({
  url,
  utm,
  embed,
  iframeTitle
}) => {
  const [loading, showLoader] = useState<boolean>(true)

  const formUrl = () => {
    const queryStringIndex = url.indexOf('?')
    const hasQueryString = queryStringIndex > -1
    const queryString = hasQueryString ? url.slice(queryStringIndex + 1) : null
    const baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url

    const updatedQueryString = [
      queryString,
      utm
        ? Object.keys(utm)
            .map((utmParam) => `${utmParam}=${utm[utmParam as keyof Utm]}`)
            .join('&')
        : null,
      embed
        ? Object.keys(embed)
            .map(
              (embedProp) => `${embedProp}=${embed[embedProp as keyof Embed]}`
            )
            .join('&')
        : null
    ]
      .filter((item) => item !== null)
      .join('&')

    return `${baseUrl}?${updatedQueryString}`
  }

  const finalUrl = formUrl()

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1
          }}
        >
          <Loader
            style={{
              width: 75,
              height: 57
            }}
          />
        </div>
      )}
      <iframe
        id='timely-iframe'
        src={finalUrl}
        frameBorder={0}
        width='100%'
        height='100%'
        title={iframeTitle ?? 'Ditto Timely'}
        onLoad={() => showLoader(false)}
        // eslint-disable-next-line react/no-unknown-property
        allowTransparency={true}
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      />
    </div>
  )
}

export const openPopupWidget = (options: TimelyWidgetProps) => {
  TimelyWidget.singletonRef.show(options)
}
