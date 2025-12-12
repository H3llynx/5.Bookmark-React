import Logo from "../../assets/images/logo-bookmark.svg"
import { NavbarTop } from "../molecules/NavbarTop"

export function Header() {

    return (
        <header className="flex justify-between pt-3 pb-1 custom-width">
            <img loading="lazy" src={Logo} alt="Bookmark logo" />
            <NavbarTop />
        </header>
    )
}