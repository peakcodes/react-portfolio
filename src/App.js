import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Rooster from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Tim Hill's Portfolio" className="header-color" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Contents">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Rooster />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
