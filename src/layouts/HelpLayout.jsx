import { Outlet,NavLink } from "react-router-dom"

export default function HelpLayout(){
    return(
        <div className="helpout">
            <h2>website help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque!</p>
        <nav>
            <NavLink to={"faq"}>View the FAQ</NavLink>
            <NavLink to={"contact"}>Contact Us</NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}