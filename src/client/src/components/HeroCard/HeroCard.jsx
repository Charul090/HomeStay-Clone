import React from 'react'
import {useSelector} from "react-redux"

export default function HeroCard() {
    let {token} = useSelector(state=>state.auth)
    return (
        <div>
            <h1>Guest-{token}</h1>
        </div>
    )
}
