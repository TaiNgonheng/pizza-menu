import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const x = "heng";
  return (
    <div>
      <h1>Hello world from build root in react {x}</h1>
      <p>js</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
