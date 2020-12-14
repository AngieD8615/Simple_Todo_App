import React from "react";
import AppBar from "./AppBar.jsx";
import SideBar from "./SideBar.jsx";
import ProjectFeed from "./ProjectsFeed.jsx";
import "../style.css";
import Grid from '@material-ui/core/Grid';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    
    return (
      <div className="app">
        <div className="nav">
          <AppBar />
        </div>
        <Grid 
          container 
          direction="row" 
          className="body"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item md={3} className="side-bar">
            <SideBar data={this.state.data} />
          </Grid>
          <Grid item md={8} className="feed" justify="center">
            <ProjectFeed data={this.state.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
