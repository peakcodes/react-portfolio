import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tim Hill</h2>
                        <img src="/../assets/images/contact2.png" alt="avatar"
                            style={{ height: '200px' }}
                        />
                        <p style={{ width: "75%", margin: 'auto', paddingTop: "2em" }}>
                            My name is Tim Hill and I have dipped my pen in a number of different inks over the years. I have experinece in Agricultural Business, Enterprise Software Sales, Non Porfit Consulting, Blockchain, Distributed Ledger Technology and Web Development. All of these skills have come through many expierences with each buidling on the last to shape the professional I am today. One does not stop learning as life has become a continual learning proces.
                    When I have free time, I find myself outdoors or evaluating financial markets. I partiuclar like hiking, skiing, studying cryptocurrecy and reading. Furthermore, expanding my skillset and continuing my education.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me </h2>
                        <hr />
                        <List>
                            <div className="contact-links">
                            <ListItem>
                                <ListItemContent style={{ fontSize: '33px', padding: '1em', fontFamily: 'Hyeon' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (301)-580-1272
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '33px', color: 'black', padding: '1em', fontFamily: 'Hyeon' }}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    tjhill11@gmail.com
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '33px', color: 'blue', padding: '1em', fontFamily: 'Hyeon' }}>
                                    <a href="https://www.linkedin.com/in/tim-hill-66141222" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    Linkedin Page
                                    </a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '33px', color: 'blue', padding: '1em', fontFamily: 'Hyeon' }}>
                                    <a href="https://github.com/peakcodes" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                        GitHub: Peakcodes
                                        </a>
                                </ListItemContent>
                            </ListItem>
                            </div>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;