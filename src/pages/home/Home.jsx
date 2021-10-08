import Buttons from '../../components/buttons/Buttons'
import Cards from '../../components/cards/Cards'
import Logo from '../../components/logo/Logo'
import Vaccine from '../../components/vaccine/Vaccine'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <div>
            <Logo />
            <Cards />
            <Vaccine />
            <Buttons />
        </div>
    )
}

export default Home
