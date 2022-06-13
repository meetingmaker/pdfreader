# ngager-pdfreader

> PDF Reader component using PDF.js library

[![NPM](https://img.shields.io/npm/v/@meetingmaker/pdfreader)](https://www.npmjs.com/package/@meetingmaker/pdfreader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ngager-pdfreader
```
## Example
https://ngager-group.github.io/ngager-pdfreader/

## Usage

```jsx
import React, { Component } from 'react'

import PDF from 'ngager-pdfreader'

class Example extends Component {
  render () {
    return (
      <PDF
        popup
        src="https://nclong87.github.io/file-example_PDF_500_kB.pdf"
        downloadable
        onRequestClose={() => this.setState({ open: false })}
        onLastPage={() => console.log('onLastPage')}
        onPageChanged={(currentPage) => console.log('currentPage', currentPage)}
      />
    )
  }
}
```

## License

MIT © [ngager-group](https://github.com/ngager-group)
