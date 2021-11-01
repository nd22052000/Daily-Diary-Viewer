import React from "react";
import FarmerDropdown from "./FarmerDropDown";
import PlotDropdown from "./PlotDropDown";
export default function App() {
  return (
    <div className="App">
      <h1 className="heading">Digital Diary View Page</h1>
      <hr /> <br />
      <FarmerDropdown />
      <br />
      <hr /> <br />
      <PlotDropdown />
      <br />
      <hr /> <br />
      <label htmlFor="myDate">Select a Date : </label>
      <input type="date" id="myDate" name="myDate" />
      <br />
      <br />
      <hr /> <br />
      <button className="submitButton">Submit</button>
    </div>
  );
}
