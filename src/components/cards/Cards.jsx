import './Cards.css'

import { useEffect, useState } from 'react'

import Axios from 'axios'

const Cards = () => {

    const [deaths, setDeaths] =  useState("")
    const [confirmed, setConfirmed] = useState("")
    const [US, setUS] = useState("")


    const GetTotal = () => {
        Axios.get('https://covid2019-api.herokuapp.com/v2/total')
        .then(function(response) {
            setDeaths(response.data.data.deaths)
            return setConfirmed(response.data.data.confirmed)
        })
    }

    const GetUS = () => {
        Axios.get('https://covid2019-api.herokuapp.com/v2/country/US')
        .then(function(response) {
            setUS(response.data.data.confirmed)
        })
    }

    const Card = (props) => {
        return (
            <div className="card">
                <h3 className="title">{props.title}</h3>
                <div className="text">{props.text}</div>
                <div className="desc">{props.desc}</div>
            </div>
        )
    }

    useEffect(() => {
        GetTotal()
        GetUS()
    }, [])


    return (
        <div className="cards">
            <Card title="US Confirmed" text={US} desc={'Number of total COVID-19 cases in US'}/>
            <Card title="Deaths" text={deaths} desc="Number of total COVID-19 deaths."/>
            <Card title="Total" text={confirmed} desc="Number of total COVID-19 cases."/>
        </div>
    )
}

export default Cards
