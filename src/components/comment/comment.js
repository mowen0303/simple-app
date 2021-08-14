import React,{Component} from "react";

export default class Comment extends Component {
    render() {
        return(
            <div style={{margin:"40px 40px 0 40px"}}>
                <p><b>Read me:</b></p>
                <ol>
                    <li>This page support responsive layout. Please try to change the width of browser.</li>
                    <li>The loading component is globally reusable.</li>
                </ol>
            </div>
        )
    }
}
