import React, { Component } from "react"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title_box">
                    <h1>GAME MATCHING</h1>
                    <p>Created By Jeon Jiwon</p>
                    <h2>쉽고 빠른 내전을 위한 랜덤팀매칭 사이트 입니다.</h2>
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
