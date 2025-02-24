import React, { CSSProperties } from "react"

export default function Button(props) {
    const classes = props.principal ?
    'pire-button pure-button-primary' : 'pure-button'

    const estilo: CSSProperties = {
        boxSizing: 'border-box',
        backgroundColor: props.principal ? '#2c80b9' : '#e6e6e6',
        float: props.principal ? 'right' : 'left',
        marginTop: '10px',
        width: '120px',
        height: '38px'
    }

    return (
        <button
            className={classes}
            style={estilo}
            onClick={props.onClick}
        >
            {props.texto}
        </button>
    )
}