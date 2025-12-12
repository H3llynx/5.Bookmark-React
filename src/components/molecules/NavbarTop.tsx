import { Button } from "../atoms/Button"
import { HamburguerLabel } from "../atoms/HamburguerLabel"
import { Link } from "../atoms/Link"
import { SocialMedia } from "./SocialMedia"

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
                <li><Link text="Features" link="#" /></li>
                <li><Link text="Pricing" link="#" /></li>
                <li><Link text="contact" link="#" /></li>
                <li><Button text="Login" color="redNav" /></li>
            </ul>

            <SocialMedia location="top" />
        </nav >
    )
}