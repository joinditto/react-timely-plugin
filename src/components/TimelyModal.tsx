import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'

import { ReactComponent as CloseIcon } from '../assets/close-icon.svg'

export interface StylesDictionary {
  [Key: string]: React.CSSProperties
}

interface TimelyModalProps {
  isOpen: boolean
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
    transform: 'translateY(-50%) translateX(-50%)',
    width: '80%',
    minWidth: '900px',
    maxWidth: '1000px',
    height: '90%',
    maxHeight: '680px',
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
    top: 0,
    left: 0,
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'hidden',
    inset: '50px 0 0 0'
  }
}

const styles: StylesDictionary = {
  closeButtonMd: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    color: '#fff',
    width: '19px',
    height: '19px',
    cursor: 'pointer',
    background: 'url(../assets/close-icon.svg) no-repeat',
    backgroundSize: 'contain',
    zIndex: 10000
  },
  closeButtonXs: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#fff',
    width: '15px',
    height: '15px',
    cursor: 'pointer',
    background: 'url(../assets/close-icon.svg) no-repeat',
    backgroundSize: 'contain',
    zIndex: 10000
  }
}

const TimelyModal: React.FC<TimelyModalProps> = ({
  isOpen,
  onClose,
  children
}) => {
  const [viewport, setViewport] = useState<{ width: Number; height: number }>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const handleViewportChange = () => {
    setViewport({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleViewportChange)
    return () => window.removeEventListener('resize', handleViewportChange)
  }, [])

  return (
    <ReactModal
      isOpen={isOpen}
      style={
        viewport && viewport.width < 960
          ? customModalStylesXs
          : customModalStylesMd
      }
      overlayElement={(props, contentElement) => (
        <div>
          <div
            style={
              viewport && viewport.width < 960
                ? styles.closeButtonXs
                : styles.closeButtonMd
            }
            onClick={onClose}
          >
            <CloseIcon />
          </div>
          <div {...props}>{contentElement}</div>
        </div>
      )}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}

export default TimelyModal