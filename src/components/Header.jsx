import React from "react"
import trollFace from "../assets/troll-face.svg"

export default function Header () {
    return (
        <header>
            <img src={trollFace} alt="troll face"/>
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}