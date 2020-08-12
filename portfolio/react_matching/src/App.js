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
            page: "read1",
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
            img1: [
                { id: 101, src: "asset/port2.png" },
                { id: 102, src: "asset/port3.png" },
                { id: 103, src: "asset/port4.png" },
                { id: 104, src: "asset/port5.png" },
                { id: 105, src: "asset/port6.png" },
                { id: 105, src: "asset/port7.png" },
                { id: 105, src: "asset/port8.png" },
            ],
            img2: [
                { id: 101, src: "asset/port1.png" },
                { id: 102, src: "asset/port9.png" },
            ],
        }
    }

    render() {
        var _title
        var onChangePage
        if (this.state.page === "read1") {
            _title = this.state.img1
        } else if (this.state.page === "read2") {
            _title = this.state.img2
        }

        onChangePage = () => {
            this.setState({ page: "read2" })
        }

        return (
            <div className="App">
                <Header></Header>
                <Nav data={this.state.data} page={this.state.page}></Nav>
                <Content img={_title} onChangePage={this.state.onChangePage()}></Content>
            </div>
        )
    }
}

export default App
