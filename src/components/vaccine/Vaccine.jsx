import './Vaccine.css'

import { useEffect, useState } from 'react'

import Axios from 'axios'
import { FaSyringe } from 'react-icons/fa'

const Vaccine = () => {

    const [store, setStore] = useState("")

    const Vaccines = () => {
        Axios.get('https://www.vaccinespotter.org/api/v0/US.json')
        .then(function(response) {
            return setStore(response.data.metadata.store_count)
        })
    }

    useEffect(() => {
        Vaccines()
    }, [])

    return (
        <div className="vaccine">
            <div className="space"></div>
            <span><FaSyringe /> </span>
            <div className="vac-text">Number of vaccines stored in the US</div>
            <div className="stored">{store}</div>
        </div>
    )
}

export default Vaccine
