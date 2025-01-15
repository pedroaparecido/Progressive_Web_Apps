import React from 'react'
import './index.css'
import image from './img/logo.png'

export default function Header() {
    return(
        <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="/"><img className="logo" src={image} alt="" /></a>
            <h4 className="label">Agenda de Gentilezas</h4>
        </div>
    )
}