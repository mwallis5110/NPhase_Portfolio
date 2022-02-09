import React, { createContext } from "react";
import { DataProvider } from "recyclerlistview";

import {TracksArray} from "../tracksArray/tracksArray.js"

export const AudioContext = createContext();

export default function beatsContext() {

    // constructor(props) {
    //     super(props)
    

  return <AudioContext.Provider value={{}}>
      {this.props.children}
  </AudioContext.Provider>;
}
