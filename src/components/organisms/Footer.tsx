
import LogoFooter from "../../assets/images/logo-footer.svg"
import { NavbarBottom } from "../molecules/NavbarBottom/NavbarBottom"
import { SocialMedia } from "../molecules/SocialMedia/SocialMedia"

export function Footer() {

    return (
        <footer className="bg-blue-dark text-white w-screen">
            <div
                className="custom-width flex flex-col items-center gap-1 md:gap-3.5 py-3 md:py-0.5 md:justify-between md:flex-row">
                <img loading="lazy" src={LogoFooter} alt="Bookmark logo" />
                <NavbarBottom />
                <SocialMedia location="bottom" />
            </div>
        </footer>
    )
}