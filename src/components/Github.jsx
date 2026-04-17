import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color: "#eafff6" }}>
      <h1 style={{ paddingBottom: "20px", textAlign: "center" }}>
        Git Activity <strong style={{ color: "#78ffd2" }}>Heatmap</strong>
      </h1>
      <GitHubCalendar
        username="Sanatan07"
        blockSize={15}
        blockMargin={5}
        color="#00ffa3"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
