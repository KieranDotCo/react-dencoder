import React from 'react'

export default function UrlEncoder(props) {
  let encodeValue;
  const encodeError = "Please enter valid text to be encoded.";

  try {
    encodeValue = encodeURIComponent(props.value);
  } catch (e) {
    encodeValue = encodeError;
  }

  return (
    <div>
      <div
        className={"alert alert-warning" + (encodeValue ? " d-none" : "")}
        role="alert"
      >
        Please enter a value to be URL Encoded.
      </div>
      {encodeValue === encodeError ? (
        <div className={"alert alert-danger"} role="alert">
          {encodeError}
        </div>
      ) : (
        <pre className="encode-value">{encodeValue}</pre>
      )}
    </div>
  );
}
