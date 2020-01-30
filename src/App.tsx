import * as React from "react";
import { VideoPlayback } from "./VideoPlayback";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <VideoPlayback url="http://blabla.com" />
    </div>
  );
}
