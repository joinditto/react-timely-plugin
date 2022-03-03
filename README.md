# react-timely

Load ditto timely scheduler from any ditto sites

## Usage

```tsx
import React, { Component } from 'react'

import { TimelyProvider, openPopupWidget } from 'react-timely'

class Example extends Component {
  handleClick() {
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

  render() {
    return (
      <TimelyProvider>
        <button onClick={handleClick}>Open Timely </button>
      </TimelyProvider>
    )
  }
}
```
