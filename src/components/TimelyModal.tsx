import React, { useEffect, useState } from 'react'

import { ReactComponent as CloseIcon } from '../assets/close-icon.svg'

const TimelyModal: React.FC<any> = ({ isOpen, onClose, children }) => {
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
    isOpen && (
      <div
        style={{
          position: 'fixed',
          zIndex: 1,
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        <button
          style={{
            background: 'transparent',
            border: 'none',
            float: 'right',
            marginRight: 15,
            marginTop: 15,
            fontWeight: 'bold',
            width: 30,
            cursor: 'pointer'
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <div
          style={{
            position: 'fixed',
            bottom: '0%',
            top: viewport.width < 768 ? undefined : '50%',
            left: viewport.width < 768 ? undefined : '50%',
            transform:
              viewport.width < 768 ? undefined : 'translate(-50%, -50%)',
            width:
              viewport.width < 768
                ? '100%'
                : viewport.width < 1124
                ? '80%'
                : 980,
            height: 550
          }}
        >
          {children}
        </div>
      </div>
    )
  )
}

export default TimelyModal
