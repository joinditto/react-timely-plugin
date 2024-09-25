import React, { PropsWithChildren, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

export interface StylesDictionary {
  [Key: string]: React.CSSProperties
}

interface TimelyModalProps extends PropsWithChildren {
  isOpen: boolean
  children: React.ReactNode
  closeBtn?: boolean
  onClose: () => void
}

const customModalStylesMd = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: '50%',
    left: '50%',
    // ideal translateX(-50%) translateY(-50%) changed to avoid blur issue in windows
    transform: 'translateX(calc(-50% - 2px)) translateY(calc(-50% - 2px))',
    width: '80%',
    minWidth: '900px',
    maxWidth: '1060px',
    height: '100%',
    maxHeight: '620px',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'hidden'
  }
}

const customModalStylesXs = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'scroll',
    inset: '50px 0 0 0'
  }
}

const customModalStylesSm = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'scroll',
    inset: '50px 0px',
    maxWidth: 660,
    margin: 'auto'
  }
}

const TimelyModal: React.FC<TimelyModalProps> = ({ isOpen, children }) => {
  const isBrowser = typeof window !== 'undefined'

  const [viewport, setViewport] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  })

  const handleViewportChange = () => {
    if (isBrowser) {
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('resize', handleViewportChange)
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', handleViewportChange)
      }
    }
  }, [])

  return (
    <ReactModal
      isOpen={isOpen}
      style={
        viewport && viewport.width < 768
          ? customModalStylesXs
          : viewport && viewport.width < 960
          ? customModalStylesSm
          : customModalStylesMd
      }
      ariaHideApp={false}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      {children}
    </ReactModal>
  )
}

export default TimelyModal
