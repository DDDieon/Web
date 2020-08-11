import React, { Component } from "react"

class Nav extends Component {
    render() {
        var lists = []
        var data = this.props.data
        var i = 0
        while (i < data.length) {
            lists.push(
                <li key={"navList" + i}>
                    <a
                        href={"/" + data[i].id}
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        {data[i].title}
                    </a>
                </li>
            )
            i++
        }

        return (
            <div className="nav_bar">
                <ul className="lists">{lists}</ul>
            </div>
        )
    }
}

export default Nav
