import { Button } from "../atoms/Button"
import { HamburguerLabel } from "../atoms/HamburguerLabel"
import { Link } from "../atoms/Link"
import { SocialMedia } from "./SocialMedia"

export function NavBar() {
    return (
        <nav className="
        group z-1 flex
        has-checked:fixed
        has-checked:inset-0
        has-checked:bg-blue-menu
        has-checked:py-3
        has-checked:px-[10vw]
        has-checked:flex-col
        ">

            <HamburguerLabel />

            <ul className="tracking-[1.5px]
            hidden leading-none gap-[2.8rem] 
        md:flex md:items-center
        group-has-checked:block
        group-has-checked: pt-1
        group-has-checked:w-full
        group-has-checked:text-white
        group-has-checked:my-2
        md:text-[12px]">
                <li><Link text="Features" link="#" /></li>
                <li><Link text="Pricing" link="#" /></li>
                <li><Link text="contact" link="#" /></li>
                <li><Button text="Login" color="red" /></li>
            </ul>

            <SocialMedia location="top" />
        </nav >
    )
}