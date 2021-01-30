import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseState from "./demo/useState";
import UseEffect from "./demo/useEffect";
import DemoProvider from "./demo/context/provider";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <DemoProvider /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
