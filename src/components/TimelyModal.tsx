import React, { useEffect, useState } from 'react'
//import ReactModal from 'react-modal'

import { ReactComponent as CloseIcon } from '../assets/close-icon.svg'

export interface StylesDictionary {
  [Key: string]: React.CSSProperties
}

// interface TimelyModalProps {
//   isOpen: boolean
//   closeBtn?: boolean
//   onClose: () => void
// }

// const customModalStylesMd = {
//   overlay: {
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflow: 'hidden',
//     zIndex: '9999',
//     backgroundColor: 'rgba(31,31,31,0.4)'
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     // ideal translateX(-50%) translateY(-50%) changed to avoid blur issue in windows
//     transform: 'translateX(calc(-50% - 2px)) translateY(calc(-50% - 2px))',
//     width: '80%',
//     minWidth: '900px',
//     maxWidth: '1060px',
//     height: '100%',
//     maxHeight: '620px',
//     padding: 0,
//     background: 'transparent',
//     border: 'none',
//     overflow: 'hidden'
//   }
// }

// const customModalStylesXs = {
//   overlay: {
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflow: 'hidden',
//     zIndex: '9999',
//     backgroundColor: 'rgba(31,31,31,0.4)'
//   },
//   content: {
//     top: 40,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     width: '100%',
//     padding: 0,
//     background: 'transparent',
//     border: 'none',
//     overflow: 'scroll',
//     inset: '50px 0 0 0'
//   }
// }

// const customModalStylesSm = {
//   overlay: {
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflow: 'hidden',
//     zIndex: '9999',
//     backgroundColor: 'rgba(31,31,31,0.4)'
//   },
//   content: {
//     top: 40,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     width: '100%',
//     padding: 0,
//     background: 'transparent',
//     border: 'none',
//     overflow: 'scroll',
//     inset: '50px 0px',
//     maxWidth: 660,
//     margin: 'auto'
//   }
// }

// const styles: StylesDictionary = {
//   closeButtonMd: {
//     position: 'fixed',
//     top: '25px',
//     right: '25px',
//     width: '19px',
//     height: '19px',
//     cursor: 'pointer',
//     color: '#fff',
//     backgroundSize: 'contain',
//     zIndex: 10000
//   },
//   closeButtonXs: {
//     position: 'fixed',
//     top: '10px',
//     right: '10px',
//     width: '15px',
//     height: '15px',
//     cursor: 'pointer',
//     color: '#fff',
//     backgroundSize: 'contain',
//     zIndex: 10000
//   },
//   overlay: {
//     width: '100vw',
//     height: '100vh',
//     position: 'absolute',
//     top: 0,
//     left: 0
//   }
// }

const TimelyModal: React.FC<any> = ({
  isOpen,
  onClose,
  //closeBtn = true,
  children
}) => {
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

  // return (
  //   <ReactModal
  //     isOpen={isOpen}
  //     style={
  //       viewport && viewport.width < 768
  //         ? customModalStylesXs
  //         : viewport && viewport.width < 960
  //         ? customModalStylesSm
  //         : customModalStylesMd
  //     }
  //     overlayElement={(props, contentElement) => (
  //       <div style={styles.overlay} onClick={onClose}>
  //         {closeBtn && (
  //           <div
  //             style={
  //               viewport && viewport.width < 960
  //                 ? styles.closeButtonXs
  //                 : styles.closeButtonMd
  //             }
  //             onClick={(e) => {
  //               e.stopPropagation()
  //               onClose()
  //             }}
  //           >
  //             <CloseIcon />
  //           </div>
  //         )}
  //         <div {...props}>{contentElement}</div>
  //       </div>
  //     )}
  //     ariaHideApp={false}
  //     onAfterOpen={() => (document.body.style.overflow = 'hidden')}
  //     onAfterClose={() => (document.body.style.overflow = 'unset')}
  //   >
  //     {children}
  //   </ReactModal>
  // )

  return (
    isOpen && (
      <div
        id='myModal'
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
            top: viewport.width < 800 ? '60%' : '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: viewport.width < 800 ? '100%' : 980,
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
