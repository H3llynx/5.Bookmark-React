import Logo from "../../assets/images/logo-bookmark.svg"
import { NavBar } from "../molecules/NavBar"

export function Header() {

    return (
        <header className="flex justify-between items-center m-auto pt-3 pb-2 w-[80vw] md:w-[77vw]">
            <img loading="lazy" src={Logo} alt="Bookmark logo"></img>
            <NavBar />
        </header>
    )
}