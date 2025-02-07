import React from 'react'
import './Styles.css'

function FunctionalComponent(props) {
    console.log(props);
    let applyStyle = props.apply ? 'heading':' '
    let inlineStyle = {
        color:'aqua',
        backgroundColor: 'red',
        fontSize : '50px'
    }

    return (
        <div>
            <h1 class={`${applyStyle} font-style`}>Welcome to my react class {props.clgName}</h1>
            {props.children}
            <h2 style={inlineStyle}>Good Afternoon</h2>
        </div>
    )
}

export default FunctionalComponent