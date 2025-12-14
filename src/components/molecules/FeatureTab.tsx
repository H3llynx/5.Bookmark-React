
import FeatureImg1 from "../../assets/images/illustration-features-tab-1.svg"
import FeatureImg2 from "../../assets/images/illustration-features-tab-2.svg"
import FeatureImg3 from "../../assets/images/illustration-features-tab-3.svg"
import { Button } from "../atoms/Button"
import { SectionHeading } from "../atoms/SectionHeading"

interface FeatureTabProps {
    title: string,
    text: string,
    tab: "tab1" | "tab2" | "tab3"
}

export function FeatureTab({ title, text, tab }: FeatureTabProps) {
    const variant = {
        tab1: FeatureImg1,
        tab2: FeatureImg2,
        tab3: FeatureImg3
    }
    return (
        <article className="relative md:text-left w-full flex flex-col-reverse md:flex-row-reverse gap-3 md:gap-2">
            <div className="w-[80vw] m-auto animate-tab-content md:w-[45%] md:pr-[10vw] md:pl-[3vw]">
                <SectionHeading color="dark" text={title} />
                <p className="mb-2">{text}</p>
                <Button color="blueSections" text="More info" />
            </div>
            <div className="w-[80vw] m-auto animate-tab-content md:w-[55%] md:pl-[10vw]">
                <img loading="lazy"
                    className="w-full object-contain aspect-7/5 object-top md:object-top-right"
                    src={variant[tab]} />
            </div>
        </article>
    )
}