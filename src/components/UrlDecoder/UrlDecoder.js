import React from 'react'

export default function UrlDecoder(props) {
  let decodeValue;
  const decodeError = "Please enter valid text to be decoded.";

  try {
    decodeValue = decodeURIComponent(props.value);
  } catch (e) {
    decodeValue = decodeError;
  }

  return (
    <div>
      <div
        className={"alert alert-warning" + (decodeValue ? " d-none" : "")}
        role="alert"
      >
        Please enter a value to be URL Decoded.
      </div>
      {decodeValue === decodeError ? (
        <div className={"alert alert-danger"} role="alert">
          {decodeError}
        </div>
      ) : (
        <pre className="decode-value">{decodeValue}</pre>
      )}
    </div>
  );
}
