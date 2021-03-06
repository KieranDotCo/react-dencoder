import React from 'react';
import './App.css';
import PrettyPrintJSON from './components/PrettyPrintJSON/PrintPrintJSON';
import UrlEncoder from './components/UrlEncoder/UrlEncoder';
import UrlDecoder from './components/UrlDecoder/UrlDecoder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'decode',
      value: '',
      encodedValue: '',
      decodedValue: '',
      jsonValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  setActiveTab(tab) {
    this.setState({ activeTab: tab });
    this.handleChange({target: {value: this.state.value}});
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onCopy() {
    // We need to create a dummy textarea with the text to be copied in the DOM
    var textArea = document.createElement("textarea");

    // Hide the textarea from actually showing
    textArea.style.position = 'fixed';
    textArea.style.top = '-999px';
    textArea.style.left = '-999px';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    // Set the texarea's content to our value defined in our [text-copy] attribute
    textArea.value = document.querySelector(`.${this.state.activeTab}-value`).textContent;
    document.body.appendChild(textArea);

    // This will select the textarea
    textArea.select();

    try {
      // Most modern browsers support execCommand('copy'|'cut'|'paste'), if it doesn't it should throw an error
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      // Let the user know the text has been copied, e.g toast, alert etc.
      console.log(msg);
    } catch (err) {
      // Tell the user copying is not supported and give alternative, e.g alert window with the text to copy
      console.log('unable to copy');
    }

    // Finally we remove the textarea from the DOM
    document.body.removeChild(textArea);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <textarea className="dencoder-textarea" placeholder="Enter the value to be encoded/decoded" value={this.state.value} onChange={this.handleChange}></textarea>
          </div>
          <div className="col-md-6">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className={'nav-item nav-link ' + (this.state.activeTab === 'decode' ? 'active' : '')} id="nav-decoded-tab" role="tab" aria-controls="nav-decoded" onClick={() => this.setActiveTab('decode')}>Decoded</button>
                <button className={'nav-item nav-link ' + (this.state.activeTab === 'encode' ? 'active' : '')} id="nav-encoded-tab" role="tab" aria-controls="nav-encoded" onClick={() => this.setActiveTab('encode')}>Encoded</button>
                <button className={'nav-item nav-link ' + (this.state.activeTab === 'json' ? 'active' : '')} id="nav-json-tab" role="tab" aria-controls="nav-json" onClick={() => this.setActiveTab('json')}>JSON</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className={'tab-pane fade ' + (this.state.activeTab === 'decode' ? 'active show' : '')} id="nav-decoded" role="tabpanel" aria-labelledby="nav-decoded-tab">
                <br />
                <UrlDecoder value={this.state.value}/>
                <button className="btn btn-light" onClick={() => this.onCopy()}>Copy Decoded</button>
              </div>
              <div className={'tab-pane fade ' + (this.state.activeTab === 'encode' ? 'active show' : '')} id="nav-encoded" role="tabpanel" aria-labelledby="nav-encoded-tab">
                <br />
                <UrlEncoder value={this.state.value}/>
                <button className="btn btn-light" onClick={() => this.onCopy()}>Copy Encoded</button>
              </div>
              <div className={'tab-pane fade ' + (this.state.activeTab === 'json' ? 'active show' : '')} id="nav-encoded" role="tabpanel" aria-labelledby="nav-encoded-tab">
                <br />
                <PrettyPrintJSON value={this.state.value}/>
                <button className="btn btn-light" onClick={() => this.onCopy()}>Copy JSON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
