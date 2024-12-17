import * as React from "react";
import { useRef, useState } from "react";

import "./Components/CSS_Files/App.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import MTA from "./Components/ModelTenancyAct";
import Differences from "./Components/Differences";
import ButtonHomepage from "./Components/ButtonsHomepage";
import Owners from "./Components/Owners";
import Tenants from "./Components/Tenants";
import ContactUs from "./Components/ContactUs";
// import SignUp from "Form.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClassNames } from "@emotion/react";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  // Create refs for each section
  const sectionRefs = [
    useRef(null), // Section 1
    useRef(null), // Section 2
    useRef(null), // Section 3
    useRef(null),
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    sectionRefs[newValue].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Tabs for navigation */}

      <Tabs
        sx={{
          position: "sticky",
          top: "0",
          padding: "5px",
          backgroundColor: "whitesmoke",
        }}
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="Navigation Tabs"
        centered
      >
        <Tab label="Home" />
        <Tab label="Key Differnces" />
        <Tab label="For Owners and Tenants" />
        <Tab label="Reach out to us" />
      </Tabs>

      <div ref={sectionRefs[0]}>
        <MTA />
      </div>
      <div ref={sectionRefs[1]}>
        <Differences />
      </div>
      <div ref={sectionRefs[2]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ButtonHomepage />}>
              {/* <Route index element={<ButtonHomepage />} /> */}
              <Route path="Owner" element={<Owners />} />
              <Route path="Tenant" element={<Tenants />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <SignUp/> */}
      <div ref={sectionRefs[3]}>
        <ContactUs />
      </div>
    </>
  );
}

export default App;
