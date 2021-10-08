import './State.css'

import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import Axios from 'axios'

const State = () => {

    const { state } = useParams()
    const history = useHistory()
    const [stored, setStored] = useState("")
    const [states, setStates] = useState("")

    let states_abbrev = [ "AK",
                      "AL",
                      "AR",
                      "AS",
                      "AZ",
                      "CA",
                      "CO",
                      "CT",
                      "DC",
                      "DE",
                      "FL",
                      "GA",
                      "GU",
                      "HI",
                      "IA",
                      "ID",
                      "IL",
                      "IN",
                      "KS",
                      "KY",
                      "LA",
                      "MA",
                      "MD",
                      "ME",
                      "MI",
                      "MN",
                      "MO",
                      "MS",
                      "MT",
                      "NC",
                      "ND",
                      "NE",
                      "NH",
                      "NJ",
                      "NM",
                      "NV",
                      "NY",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "PR",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VA",
                      "VI",
                      "VT",
                      "WA",
                      "WI",
                      "WV",
                      "WY",]

    let states_array = ["Alaska",
                      "Alabama",
                      "Arkansas",
                      "American Samoa",
                      "Arizona",
                      "California",
                      "Colorado",
                      "Connecticut",
                      "District of Columbia",
                      "Delaware",
                      "Florida",
                      "Georgia",
                      "Guam",
                      "Hawaii",
                      "Iowa",
                      "Idaho",
                      "Illinois",
                      "Indiana",
                      "Kansas",
                      "Kentucky",
                      "Louisiana",
                      "Massachusetts",
                      "Maryland",
                      "Maine",
                      "Michigan",
                      "Minnesota",
                      "Missouri",
                      "Mississippi",
                      "Montana",
                      "North Carolina",
                      " North Dakota",
                      "Nebraska",
                      "New Hampshire",
                      "New Jersey",
                      "New Mexico",
                      "Nevada",
                      "New York",
                      "Ohio",
                      "Oklahoma",
                      "Oregon",
                      "Pennsylvania",
                      "Puerto Rico",
                      "Rhode Island",
                      "South Carolina",
                      "South Dakota",
                      "Tennessee",
                      "Texas",
                      "Utah",
                      "Virginia",
                      "Virgin Islands",
                      "Vermont",
                      "Washington",
                      "Wisconsin",
                      "West Virginia",
                      "Wyoming"]

    const GetVaccines = () => {

        if (!states_abbrev.includes(state))
        {
            return history.push('/')
        }

        const index = states_abbrev.indexOf(state)


        Axios.get(`https://www.vaccinespotter.org/api/v0/states/${state}.json`)
        .then(function(response) {
            setStored(response.data.metadata.store_count)
            return setStates(states_array[index])
        })
    }

    useEffect(() => {
        document.title = 'Stored vaccines'
        GetVaccines()
    }, [])


    return (
        <div className="state">
            The number of vaccines stored in <span>{states}</span>
            <div className="stored">{stored}</div>
        </div>
    )
}

export default State
