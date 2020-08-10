import React, { Component } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Content from "./components/Content"
// import "./clickevent.js"
// import "./matchingAdd.js"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <Nav></Nav>
                <Content></Content>
            </div>
        )
    }
}

export default App
