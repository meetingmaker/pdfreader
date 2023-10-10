import React, { PureComponent } from 'react'

import PDF from '@meetingmaker/pdfreader'

const GoToPage = (props) => {
  const inputRef= React.useRef();
  function onClick() {
    // console.log('onClick', Number(inputRef.current.value));
    props.goToPage(Number(inputRef.current.value))
  }
  return (
    <fieldset className="gotopage">
      <legend>Go to page</legend>
      <input defaultValue={1} type="text" ref={inputRef} />
      <button onClick={onClick}>Go</button>
    </fieldset>
  )
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      downloadable: false,
    }
    console.log('constructor')
    this.viewer = {
      host: 'https://nclong87.github.io',
      path: '/web/viewer.html',
      // host: 'http://localhost',
      // path: '/pdf/web/viewer.html',
    };
    this.pdfRef = React.createRef();
    this.handleGoToPage = this.handleGoToPage.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ downloadable: true });
  //   }, 5000);
  // }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  handleGoToPage(page) {
    this.pdfRef.current.goToPage(page);
  }

  handleStartPresentation(isPresenter) {
    this.pdfRef.current.startPresentation({ isPresenter })
  }

  render () {
    if (this.state.open === false) {
      return (
        <div><button onClick={() => this.setState({ open: true })}>Open PDF Reader</button></div>
      );
    }
    return (
      <div className="pdf-container">
        <div className="test-controls">
          <GoToPage goToPage={this.handleGoToPage} />
          <fieldset>
            <legend>Start presentation</legend>
            <button onClick={() => this.handleStartPresentation(true)}>As Presenter</button>
            <button onClick={() => this.handleStartPresentation(false)}>As Viewer</button>
          </fieldset>
        </div>
        <PDF
          ref={this.pdfRef}
          src="https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_500_kB.pdf"
          downloadable={this.state.downloadable}
          onLastPage={() => console.log('onLastPage')}
          onPageChanged={(currentPage) => console.log('currentPage', currentPage)}
          viewer={this.viewer}
        />
      </div>
    )
  }
}