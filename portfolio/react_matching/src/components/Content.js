import React, { Component } from "react"

class Content extends Component {
    render() {
        var imgLists = []
        var imgs = this.props.img
        var j = 0
        while (j < imgs.length) {
            imgLists.push(
                <li key={"content" + j}>
                    <img id={j} src={this.props.img[j].src} alt="이미지입니다"></img>
                    {/* <img id={j} src={require("/asset/port1.jpg")} alt="이미지입니다"></img>
                     */}
                    {/* 이미지 엑박문제 해결해야 함 */}
                </li>
            )
            j++
        }

        return (
            <div className="contents">
                <ul className="list-box">{imgLists}</ul>
            </div>
        )
    }
}
export default Content
