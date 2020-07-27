import React, { Component } from "react"

class Content extends Component {
    render() {
        return (
            <div className="contents">
                <div className="list-box">
                    <div className="write-box">
                        <input type="text" className="text-basic" />
                        <button type="button" id="btnAdd" className="btnAdd">
                            추가(enter)
                        </button>
                    </div>
                    <div className="list-table">
                        <div id="listBody" className="listBody"></div>
                    </div>
                    <div className="btn-area">
                        <button type="button" id="DeleteAll">
                            전체삭제
                        </button>
                        <button type="button" id="DeleteSel">
                            선택삭제
                        </button>
                        <button type="button" id="goMatching">
                            매칭
                        </button>
                    </div>
                </div>
                <div className="teamWrapper">
                    <section>
                        <h2 id="redteam">Red Team</h2>
                        <div className="red"></div>
                    </section>
                    <section>
                        <h2 id="blueteam">Blue Team</h2>
                        <div className="blue"></div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Content
