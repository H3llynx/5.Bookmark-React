import HeroImg from "../../assets/images/illustration-hero.svg"
import { Blob } from "../atoms/Blob"
import { HeroFloatingText } from "../molecules/HeroFloatingText"

export function HeroSection() {

    return (
        <section className="relative w-full m-auto pb-2 text-center flex flex-col-reverse md:flex-row gap-3 md:gap-2">
            <Blob location="hero" />
            <HeroFloatingText />

            <img src={HeroImg} className="px-[5vw] md:px-3 md:py-2 w-full md:w-[55%]" />
        </section>
    )
}