import Separator from "../../../assets/images/bg-dots.svg"
import { Button } from "../../atoms/Button/Button"
import type { CardProps } from "./Cards.types"

export function Card({ browser, margin }: CardProps) {
    return (
        <div className={`card ${margin}`}>
            <img loading="lazy" src={browser.img} className="mt-auto" />
            <h3>{browser.title}</h3>
            <p className="text-[0.9rem]">{browser.version}</p>
            <img src={Separator} className="mx-0 my-auto w-full" />
            <Button color="blueSections">Add & Install Extension</Button>
        </div>
    )
}