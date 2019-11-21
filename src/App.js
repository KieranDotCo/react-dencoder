import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <textarea className="dencoder-textarea" placeholder="Enter the value to be encoded/decoded"></textarea>
        </div>
        <div className="col-md-6">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-item nav-link" id="nav-decoded-tab" role="tab" aria-controls="nav-decoded">Decoded</button>
              <button className="nav-item nav-link" id="nav-encoded-tab" role="tab" aria-controls="nav-encoded">Encoded</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade" id="nav-decoded" role="tabpanel" aria-labelledby="nav-decoded-tab">
              <br/>
              <div className="alert alert-warning" role="alert">
                  Please enter a value to be decoded.
              </div>
              <pre className="decoded-value"></pre>
              <button className="btn btn-light">Copy Decoded</button>
            </div>
            <div className="tab-pane fade" id="nav-encoded" role="tabpanel" aria-labelledby="nav-encoded-tab">
                <br/>
                <div className="alert alert-warning" role="alert">
                    Please enter a value to be encoded.
                </div>
              <pre className="encoded-value"></pre>
              <button className="btn btn-light">Copy Encoded</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
