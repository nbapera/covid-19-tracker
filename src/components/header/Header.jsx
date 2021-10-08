import './Header.css'
import { FaGithub, FaStackOverflow, FaYoutube } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <a href="https://github.com/nbapera" target="_blank" rel="noreferrer"><FaGithub className="icon" /></a>
            <a href="https://stackoverflow.com/users/16951171/nbapera" target="_blank" rel="noreferrer"><FaStackOverflow className="icon" /></a>
            <a href="https://www.youtube.com/channel/UCIrqTim0T0HBlW8dDRxN5VA" target="_blank" rel="noreferrer"><FaYoutube className="icon" /></a>
        </header>
    )
}

export default Header
