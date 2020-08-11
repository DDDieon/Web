import React, { Component } from "react"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title_box">
                    <h1>Portfolio</h1>
                    <p>Created By React</p>
                    <h2>해당 사이트는 react 라이브러리를 통해 제작하였습니다</h2>
                </div>
                <button type="button" className="btn_box">
                    <div className="gitIcon"></div>
                    <div className="gitName">GITHUB</div>
                </button>
            </div>
        )
    }
}
export default Header
