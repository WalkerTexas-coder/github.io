import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Image from './images/road.jpg'
import CssBadge from './images/icons/css.png'
import GearboxBadge from './images/icons/gearbox.png'
import HtmlBadge from './images/icons/html.png'
import JsBadge from './images/icons/javascript.png'
import RailsBadge from './images/icons/rails.jpg'
import RubyBadge from './images/icons/ruby.png'
import ReactBadge from './images/icons/react.png'
import SqlBadge from './images/icons/sql.png'
import PostBadge from './images/icons/postgres.png'
import Button from './components/button.js'
import Navbar from './components/navbar.js'
import Navs from './components/navs.js'
import ProfilePic from './images/profile.jpg'
import Card from './components/card.js'
import Cicero from './images/cicero.jpg'




class App extends Component {
  constructor(){
    super()
    this.state = {
      theme: "road",
      mainTheme: "mainRoad"
    }
}
    onClickEvent = (theme, mainTheme) =>{
      this.setState({theme:theme, mainTheme:mainTheme})
    }





  render(){
  return (
    <>
      <div className="App">
          <Navbar />
        <div className={this.state.mainTheme}>

          <h2 className="site-title"> Austin Scott Ryley Walker </h2>
          <div className="themeButtonsContainer">
            <Button title="Road" id="roadButton" themeSetter= {()=> {this.onClickEvent("road", "mainRoad")}}/>
            <Button title="Ocean" id="oceanButton" themeSetter= {()=> {this.onClickEvent("ocean", "mainOcean")}}/>
            <Button title="City" id="cityButton" themeSetter= {()=> {this.onClickEvent("city", "mainCity")}}/>
            </div>
        </div>

        <Container id= {this.state.theme}>
          <h2 className="sectionTitle">
            About Me
          </h2>
          <Row className="section">
            <Col  sm="12" md="4">
              <img id="personalImage" src={ProfilePic}/>
            </Col>
            <Col  sm="12" md="8">
            <div id="aboutme"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Orci nulla pellentesque dignissim enim sit amet. Quam quisque id diam vel. Cum sociis natoque penatibus et magnis dis parturient montes. Ultricies integer quis auctor elit sed vulputate mi sit. Mauris cursus mattis molestie a. Vulputate mi sit amet mauris commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Sollicitudin nibh sit amet commodo nulla. Fames ac turpis egestas maecenas pharetra convallis. Nunc aliquet bibendum enim facilisis gravida neque. Euismod lacinia at quis risus sed. Sit amet volutpat consequat mauris nunc congue nisi. Posuere sollicitudin aliquam ultrices sagittis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nec feugiat in fermentum posuere urna nec tincidunt.


              </div>
            </Col>
          </Row>
          <h2 className="sectionTitle">
            Technologies
          </h2>
          <Row className="section technologies">
              <img src={HtmlBadge} alt="html"/>
              <img src={CssBadge} alt="Css"/>
              <img src={JsBadge} alt="javascript"/>
              <img src={ReactBadge} alt="React"/>
              <img src={RubyBadge} alt="Ruby"/>
              <img src={PostBadge} alt="Postgresql"/>
              <img src={SqlBadge} alt="SQL"/>
              <img src={GearboxBadge} alt="Driving Stick"/>
          </Row>
          <h2 className="sectionTitle">
            Projects
          </h2>
          <Row className="section">
            <Col xs="12" sm="4">
                <Card cardTitle="Cicero" cardSubtitle= "Latin for 'subtitle'" cardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." linkToProject="https://github.com/WalkerTexas-coder" cardImg={Cicero}/>
            </Col >
            <Col xs="12" sm="4">
                <Card cardTitle="Example Two" cardSubtitle= "this is the subtitle" cardText="Lorem ipsum" linkToProject=''/>
            </Col>
            <Col xs="12" sm="4">
                <Card cardTitle="Example Three" cardSubtitle= "this is the subtitle" cardText="Lorem ipsum" linkToProject=''/>
            </Col>
          </Row>
        </Container>
          <footer>

        </footer>
      </div>
    </>

  );
}
}
export default App;
