import React from 'react'
import { TimelyProvider, openPopupWidget } from 'react-timely'

const App = () => {
  const handleClick = () => {
    const url = new URL(window.location.href)
    openPopupWidget({
      url: 'http://localhost:3001/event/hotline/book',
      utm: {
        utm_term: 'TestTerm',
        utm_campaign: 'TestCampaign',
        utm_content: 'TestContent',
        utm_medium: 'TestMedium',
        utm_source: 'TestSource',
        ref: 'influencercode',
        referral_url: encodeURIComponent(
          'https://test.referralurl.com/influencer?p1=a&p2=b'
        )
      },
      embed: {
        embed_domain: url.hostname,
        embed_path: url.pathname,
        embed_type: 'popup'
      }
    })
  }
  return (
    <TimelyProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%'
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <h1>Any Ditto Website</h1>
          <button onClick={handleClick}>Open Timely</button>
        </div>
      </div>
    </TimelyProvider>
  )
}

export default App
