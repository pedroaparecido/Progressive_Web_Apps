import React, { CSSProperties } from 'react'

export default function Label(props) {
    const estilo: CSSProperties = {
        color: props.valorInvalido ? '#d50000' : '#444444'
    }

    return(
        <label htmlFor={props.for} style={estilo}>{props.label}</label>
    )
}