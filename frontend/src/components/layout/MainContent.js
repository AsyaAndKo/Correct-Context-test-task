import React from "react";
import { MainContainer, Header } from "../../styles/Main.style";
import SnackBar from "./SnackBar";

import Buttons from "./Buttons";
import DateTime from "./DateTime";
import Email from "./Email";
import Format from "./Format";
import ReportName from "./ReportName";
import Schedule from "./Schedule";

export default function MainContent() {
  const data = {
    format: ["Excel", "CSV"],
    schedule: ["No Repeat", "Specific Date", "Daily", "Weekly"],
  };

  // TODO: check email by /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ if no popup?

  return (
    <>
      <MainContainer>
        <Header>Export Report</Header>
        <ReportName />
        <Format data={data.format} />
        <Email />
        <Schedule data={data.schedule} />
        <DateTime />
        <Buttons />
      </MainContainer>
      <SnackBar />
    </>
  );
}
