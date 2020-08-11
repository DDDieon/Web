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
        this.state = {
            page: "welcome",
            // welcome: { title: "전체타이틀", desc: "desc is me" },
            data: [
                {
                    id: 1,
                    title: "요약보기",
                },
                {
                    id: 2,
                    title: "포트폴리오",
                },
                {
                    id: 3,
                    title: "포트폴리오2",
                },
            ],
            img: [
                { id: 101, src: "asset/port2.png" },
                { id: 102, src: "asset/port3.png" },
                { id: 103, src: "asset/port4.png" },
                { id: 104, src: "asset/port5.png" },
                { id: 105, src: "asset/port6.png" },
                { id: 105, src: "asset/port7.png" },
                { id: 105, src: "asset/port8.png" },
            ],
        }
    }

    render() {
        var _title = null
        if (this.state.mode === "welcome") {
            _title = this.state.page
        } else if (this.state.mode === "read") {
            _title = this.state.img
        }
        // var _title = null
        // var _desc = null
        // if (this.state.mode === "welcome") {
        //     _title = this.state.welcome.title
        //     _desc = this.state.welcome.desc
        // } else if (this.state.mode === "read") {
        //     _title = this.state.welcome.title
        //     _desc = this.state.welcome.desc
        // }

        return (
            <div className="App">
                <Header></Header>
                <Nav data={this.state.data} page={this.state.page}></Nav>
                <Content img={this.state.img}></Content>
            </div>
        )
    }
}

export default App
