import { Button } from "../atoms/Button"

export function HeroFloatingText() {
    return (
        <div className="custom-width md:w-[45%] md:pl-[11.5vw]">
            <h1 className="text-blue-dark md:text-left">A Simple Bookmark Manager</h1>
            <p className="md:text-left">A clean and simple interface to organize your favourite websites. Open a new browser
                tab and see your sites load instantly. Try it for free.</p>
            <div className="flex gap-[1.2rem] mt-2 justify-center md:justify-start text-sm">
                <Button color="blueHero">Get it on Chrome</Button>
                <Button color="grey">Get it on Firefox</Button>
            </div>
        </div>
    )
} 