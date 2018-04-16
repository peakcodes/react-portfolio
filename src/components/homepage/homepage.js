import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";


class HomePage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                      <img src="../assets/images/Headshot.jpg"
                      alt="headshot"
                      className="headshot-image img-circle"
                        />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                    <hr/>
                    <p> HTML/CSS | JavaScript | Node.JS | SQL | MongoDB | React | Express </p>
                    <div className="social-links">
                    <a href="https://github.com/peakcodes" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                    <a href="https://www.linkedin.com/in/tim-hill-66141222" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>

                    <a href="https://stackoverflow.com/users/9284788/tim-h" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-stack-overflow" aria-hidden="true"/>
                    </a>

                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default HomePage;