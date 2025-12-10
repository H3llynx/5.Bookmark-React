import { Button } from "../atoms/Button"
import { Link } from "../atoms/Link"

export function NavBar() {
    return (
        <nav className="flex gap-[2.8rem] items-center">
            <Link text="Features" link="#" />
            <Link text="Pricing" link="#" />
            <Link text="contact" link="#" />
            <Button text="Login" color="red" />
        </nav>
    )
}