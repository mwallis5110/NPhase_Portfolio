import React, { useState, useEffect} from "react";
// import { gsap } from "gsap";

import FirstPage from "./pages/firstPage/firstPage.js";
import NavBar from "./components/nav/nav.js";
import Logo from "./components/logo/logo.js"
import Beats from "./pages/beats/beats.js";
import Services from "./pages/services/services.js";
import NPhaseBio from "./pages/nPhaseBio/nPhaseBio.js";
import TeamBio from "./pages/teamBio/teamBio.js";
import Contact from "./pages/contact/contact.js";

import LoadingScreen from "./components/loading/loading.js";

import "./App.css";

export default function App() {
  // Determines whether page is loading, then returns either loading screen or first page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
          <div className="App">
            {/* <FirstPage /> */}
            <NavBar />
            
              <FirstPage/>
              <Logo/>
              <Beats/>
              <Services/>
              <NPhaseBio/>
              {/* <TeamBio /> */}
              <Contact/>
            
          </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
