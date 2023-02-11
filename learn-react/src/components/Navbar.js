import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img alt="React Logo" src={logo} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>

        </nav>
    )
}