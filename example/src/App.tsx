import React from 'react'

import { TimelyProvider, openPopupWidget } from 'react-timely'

const App = () => {
  const handleClick = () => {
    openPopupWidget({
      url: 'http://localhost:3001/event/9c6e37e0-662f-4824-81f4-a38fcca2bc75/book',
      utm: {
        utmTerm: 'TestTerm',
        utmCampaign: 'TestCampaign',
        utmContent: 'TestContent',
        utmMedium: 'TestMedium',
        utmSource: 'TestSource'
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
