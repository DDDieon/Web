import React, { Component } from "react"

class Nav extends Component {
    render() {
        var lists = []
        var data = this.props.data
        var onChangePage = this.props.onChangePage
        var i = 0

        // while (i < data.length) {
        //     lists.push(
        //         <li key={"navList" + i}>
        //             <a
        //                 href={"/" + data[i].id}
        //                 onClick={(e) => {
        //                     e.preventDefault()
        //                 }}
        //             >
        //                 {data[i].title}
        //             </a>
        //         </li>
        //     )
        //     i++
        // }

        return (
            <div className="nav_bar">
                <ul className="lists">
                    <li>
                        <a href="/" onClick={onChangePage}>
                            요약보기
                        </a>
                    </li>
                    <li>포트폴리오</li>
                    <li>포트폴리오2</li>
                </ul>
            </div>
        )
    }
}

export default Nav
