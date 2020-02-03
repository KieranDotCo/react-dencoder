import React from "react";

export default function PrintPrintJSON(props) {
  let jsonValue;
  const jsonError = "Please enter valid JSON to be pretty printed.";

  try {
    jsonValue = JSON.stringify(JSON.parse(props.value), null, 2);
  } catch (e) {
    jsonValue = jsonError;
  }

  return (
    <div>
      <div
        className={"alert alert-warning" + (jsonValue ? " d-none" : "")}
        role="alert"
      >
        Please enter a value to pretty print as JSON.
      </div>
      {jsonValue === jsonError ? (
        <div className={"alert alert-danger"} role="alert">
          {jsonError}
        </div>
      ) : (
        <pre className="json-value">{jsonValue}</pre>
      )}
    </div>
  );
}
