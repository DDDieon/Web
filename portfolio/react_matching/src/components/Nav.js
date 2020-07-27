import React, { Component } from "react"

class Nav extends Component {
    render() {
        return (
            <div className="nav_bar">
                <ul className="lists">
                    <li>
                        <a href="/">랜덤 매칭하기</a>
                    </li>
                    <li>
                        <a href="/">사용법</a>
                    </li>
                    <li>
                        <a href="/">만든 이</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav
