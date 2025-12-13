import Separator from "../../assets/images/bg-dots.svg"
import LogoChrome from "../../assets/images/logo-chrome.svg"
import LogoFirefox from "../../assets/images/logo-firefox.svg"
import LogoOpera from "../../assets/images/logo-opera.svg"
import { Button } from "../atoms/Button"

export function Card({ extension, name, version, className }: { extension: "chrome" | "firefox" | "opera", name: string, version: number, className?: string }) {
    const variant = {
        chrome: LogoChrome,
        firefox: LogoFirefox,
        opera: LogoOpera
    }
    return (
        <div className={`card ${className || ""}`}>
            <img loading="lazy" src={variant[extension]} className="mt-auto" alt="" />
            <h3>Add to {name}</h3>
            <p className="text-[0.9rem]">Minimum version {version}</p>
            <img src={Separator} className="mx-0 my-auto w-full" />
            <Button color="blueSections" text="Add & Install Extension" />
        </div>
    )
}