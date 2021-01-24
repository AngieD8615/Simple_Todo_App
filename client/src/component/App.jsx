import React, { useState, useEffect } from "react";
import AppBar from "./AppBar.jsx";
import SideBar from "./SideBar.jsx";
import ProjectFeed from "./ProjectsFeed.jsx";
import "../style.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export default function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get("/projects")
      .then((res) => {
        setData(res.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  });

  return (
    <div className="app">
      <div className="nav">
        <AppBar />
      </div>
      {isLoading ? (
        <p> loading </p>
      ) : (
        <Grid
          container
          direction="row"
          className="body"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs md={3} className="side-bar" m={"20px"}>
            <SideBar data={data} />
          </Grid>
          <Grid item xs md={9} className="feed" justify="center">
            <ProjectFeed data={data} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
