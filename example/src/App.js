import React, { PureComponent } from 'react'

import PDF from '@meetingmaker/pdfreader'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      downloadable: false,
    }
    console.log('constructor')
    this.viewer = {
      host: 'http://localhost',
      path: '/pdf/web/viewer.html',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ downloadable: true });
    }, 5000);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  render () {
    if (this.state.open === false) {
      return (
        <div><button onClick={() => this.setState({ open: true })}>Open PDF Reader</button></div>
      );
    }
    return (
      <div>
        <PDF
          popup
          src="https://awesomecloudstorage.blob.core.windows.net/aep/intrum/b87aa84f-6823-4b3f-ae5e-48b33ad66f97_fae9a42f-e653-47a8-b6e7-3c87cba8044a_https3.pdf"
          downloadable={this.state.downloadable}
          onRequestClose={() => this.setState({ open: false })}
          onLastPage={() => console.log('onLastPage')}
          onPageChanged={(currentPage) => console.log('currentPage', currentPage)}
          viewer={this.viewer}
        />
      </div>
    )
  }
}
