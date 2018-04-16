import React, { Component } from "react";
import { Grid, Cell, Card, Tab, Tabs, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid" style={{ background: 'url(/../assets/images/background.jpg)'}}>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#rrrr', textAlign: 'center', textSizeAdjust: "200%", fontWeight: 'bold', height: '175px', background: 'url(../../assets/images/cryptomemory.jpg) center / cover' }}>React Crypto Memory Game</CardTitle>
                    <CardText style={{ color: "#wwww" }}>
                        A Crytpo Memory Card game built in React.js where the user clicks shuffled images while trying to avoid clicking the same image. See if you can record a top score!
            </CardText>
                    <CardActions border>
                        <Button colored>Game</Button>
                        <Button colored href="https://github.com/peakcodes/Crypto-Memory-Card-Game" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#rrrr', textAlign: 'center', textSizeAdjust: "200%", fontWeight: 'bold', height: '175px', background: 'url(../../assets/images/cryptogolf.png) center / cover' }}>Crypto Golf</CardTitle>
                    <CardText style={{ color: "#wwww"}}>
                    A game built off financial charts that allows users to pick particular assets and play golf ontop of such charts with particular time frames.
            </CardText>
                    <CardActions border>
                        <Button colored href="https://crypto-golf.herokuapp.com/" target="_blank">Game</Button>
                        <Button colored href="https://github.com/peakcodes/cryptoGolf" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#rrrr', textAlign: 'center', textSizeAdjust: "200%", fontWeight: 'bold', height: '175px', background: 'url(../../assets/images/pilltrax.jpg) center / cover' }}>Med Trax</CardTitle>
                    <CardText style={{ color: "#wwww"}}>
                    An application built to help consumers find and keep track of over-the-counter drugs they currently use and have taken. Create a Profile. 
            </CardText>
                    <CardActions border>
                        <Button colored href="http://med-trax.herokuapp.com/" target="_blank">Appliction</Button>
                        <Button colored href="https://github.com/peakcodes/OTC-drug-tracker" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#rrrr', textAlign: 'center', textSizeAdjust: "200%", fontWeight: 'bold', height: '175px', background: 'url(../../assets/images/charity.png) center / cover' }}>My Charity Connection</CardTitle>
                    <CardText style={{ color: "#wwww"}}>
                    An application built to help consumers find local or national charities/non-profits they would either like to donate towards or volunteer for.
            </CardText>
                    <CardActions border>
                        <Button colored href="https://peakcodes.github.io/MyCharityConnection/" target="_blank">Application</Button>
                        <Button colored href="https://github.com/peakcodes/MyCharityConnection" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#rrrr', textAlign: 'center', textSizeAdjust: "200%", fontWeight: 'bold', height: '175px', background: 'url(../../assets/images/btcscrape.jpeg) center / cover' }}>BTC News Scrapper</CardTitle>
                    <CardText style={{ color: "#wwww"}}>
                    An application built to be a one stop shop for getting bitcoin, crypto and blockchain news. Users have the ability to saved articles as well as notes.
            </CardText>
                    <CardActions border>
                        <Button colored>Application</Button>
                        <Button colored href="https://github.com/peakcodes/NYTScrapper" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Games Sections</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Non Profit Work Section</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projects</Tab>
                    <Tab>Games</Tab>
                    <Tab>Non-Profit Work</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;