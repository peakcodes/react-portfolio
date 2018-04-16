import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tim Hill</h2>
                    <img src="/../assets/images/contact2.png" alt="avatar"
                    style={{height:'200px'}}
                    />
                    <p style={{ width: "75%", margin: 'auto', paddingTop: "2em"}}>
                    My name is Tim Hill and I have dipped my pen in a number of different inks over the years. I have experinece in Agricultural Business, Enterprise Software Sales, Non Porfit Consulting, Blockchain, Distributed Ledger Technology and Web Development. All of these skills have come through many expierences with each buidling on the last to shape the professional I am today. One does not stop learning as life has become a continual learning proces.
                    When I have free time, I find myself outdoors or evaluating financial markets. I partiuclar like hiking, skiing, studying cryptocurrecy and reading. Furthermore, expanding my skillset and continuing my education.</p>
                    </Cell>
                    <Cell col={6}>Contact Me
                    
                    </Cell>
               </Grid>
            </div>
        )
    }
}

export default Contact;