import { Link } from "../atoms/Link"

export function NavbarBottom() {
    return (
        <ul className="navbar-ul flex flex-col md:flex-row my-2
            text-white md:mr-auto">
            <li><Link text="Features" link="#" /></li>
            <li><Link text="Pricing" link="#" /></li>
            <li><Link text="contact" link="#" /></li>
        </ul>
    )
}