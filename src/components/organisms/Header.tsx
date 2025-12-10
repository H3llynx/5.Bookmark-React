import Logo from "../../assets/images/logo-bookmark.svg"
import { NavBar } from "../molecules/NavBar"

export function Header() {

    return (
        <header className="flex justify-between items-center w-[77vw] m-auto pt-3 pb-2">
            <img loading="lazy" src={Logo} alt="Bookmark logo"></img>
            <NavBar />
        </header>
    )
}