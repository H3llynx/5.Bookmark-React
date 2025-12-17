import { Link } from "../atoms/Link/Link"

export function NavbarBottom() {
    return (
        <ul className="navbar-ul flex flex-col md:flex-row my-2
            text-white md:mr-auto">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#newsletter">Contact</Link></li>
        </ul>
    )
}