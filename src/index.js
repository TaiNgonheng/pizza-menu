import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  return <div>Hello world from react</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
