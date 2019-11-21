import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'decode',
      value: '',
      encodedValue: '',
      decodedValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  setActiveTab(tab) {
    this.setState({ activeTab: tab });
    this.handleChange({target: {value: this.state.value}});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({decodedValue: decodeURIComponent(event.target.value)});
    this.setState({encodedValue: encodeURIComponent(event.target.value)});
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
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className={'tab-pane fade ' + (this.state.activeTab === 'decode' ? 'active show' : '')} id="nav-decoded" role="tabpanel" aria-labelledby="nav-decoded-tab">
                <br />
                <div className="alert alert-warning" role="alert">
                  Please enter a value to be decoded.
                </div>
                <pre className="decoded-value">
                  {this.state.decodedValue}
                </pre>
                <button className="btn btn-light">Copy Decoded</button>
              </div>
              <div className={'tab-pane fade ' + (this.state.activeTab === 'encode' ? 'active show' : '')} id="nav-encoded" role="tabpanel" aria-labelledby="nav-encoded-tab">
                <br />
                <div className="alert alert-warning" role="alert">
                  Please enter a value to be encoded.
                  </div>
                <pre className="encoded-value">
                  {this.state.encodedValue}
                </pre>
                <button className="btn btn-light">Copy Encoded</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
