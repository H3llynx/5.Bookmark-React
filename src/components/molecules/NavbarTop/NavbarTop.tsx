import { Button } from "../../atoms/Button/Button"
import { HamburguerLabel } from "../../atoms/HamburguerLabel/HamburguerLabel"
import { Link } from "../../atoms/Link/Link"
import { SocialMedia } from "../SocialMedia/SocialMedia"

export function NavbarTop() {
    return (
        <nav className="
        group z-1
        has-checked:fixed
        has-checked:inset-0
        has-checked:bg-blue-menu
        has-checked:py-3
        has-checked:px-[10vw]
        has-checked: flex
        has-checked:flex-col
        ">

            <HamburguerLabel />

            <ul className="
            navbar-ul font-medium text-grey-dark
            md:pt-0 hidden md:flex
            group-has-checked:pt-1
            group-has-checked:block
            group-has-checked:w-full
          group-has-checked:text-white
            group-has-checked:my-2">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#newsletter">Contact</Link></li>
                <li><Button color="redNav">Login</Button></li>
            </ul>

            <SocialMedia location="top" />
        </nav >
    )
}