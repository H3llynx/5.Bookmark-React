import Logo from "../../assets/images/logo-bookmark.svg"
import { NavBar } from "../molecules/NavBar"

export function Header() {

    return (
        <header className="flex justify-between py-2 w-[80vw] md:w-[77vw]">
            <img loading="lazy" src={Logo} alt="Bookmark logo"></img>
            <NavBar />
        </header>
    )
}