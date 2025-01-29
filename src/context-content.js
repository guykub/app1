import React from "react";
import {useContext} from "./context"

export default function Context(){
    let user = React.useContext(useContext)

    const contentStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    return(
        <div style={contentStyle}>Hello {user}</div>
    )
}