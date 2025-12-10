import CloseIcon from "../../assets/images/icon-close.svg"
import HamburgerIcon from "../../assets/images/icon-hamburger.svg"
import LogoMenu from "../../assets/images/logo-bookmark-menu.svg"

export function HamburguerLabel() {

    return (
        <label htmlFor="menu-toggle" aria-label="open/close menu" className="relative flex justify-between">
            <img src={LogoMenu} alt="bookmark logo" className="hidden group-has-checked:block" />
            <input type="checkbox" className="absolute z-2 opacity-0" id="menu-toggle" />
            <img src={HamburgerIcon} id="menu-icon" alt="" className="group-has-checked:hidden md:hidden" />
            <img src={CloseIcon} id="close-icon" alt="" className="hidden group-has-checked:block" />
        </label>
    )
}