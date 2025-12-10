import { Button } from "../atoms/Button"
import { HamburguerLabel } from "../atoms/HamburguerLabel"
import { Link } from "../atoms/Link"

export function NavBar() {
    return (
        <nav className="
        group z-1 justify-between
        has-checked:fixed has-checked:inset-0 has-checked:bg-blue-menu
        has-checked:flex-wrap has-checked:items-start has-checked:py-3
        has-checked:px-[10vw]
        ">

            <HamburguerLabel />

            <ul className="tracking-[1.5px] hidden leading-none gap-3
        md:flex md:items-center
        group-has-checked:block
        group-has-checked:w-full
        group-has-checked:text-white
        group-has-checked:my-2">
                <li><Link text="Features" link="#" /></li>
                <li><Link text="Pricing" link="#" /></li>
                <li><Link text="contact" link="#" /></li>
                <li><Button text="Login" color="red" /></li>
            </ul>
        </nav >
    )
}