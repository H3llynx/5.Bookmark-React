
import FeatureImg1 from "../../assets/images/illustration-features-tab-1|2|3.svg"
import FeatureImg2 from "../../assets/images/illustration-features-tab-2.svg"
import FeatureImg3 from "../../assets/images/illustration-features-tab-3.svg"
import { Button } from "../atoms/Button"
import { SectionHeading } from "../atoms/SectionHeading"

export function FeatureTab({ title, text, tab }: { title: string, text: string, tab: 1 | 2 | 3 }) {
    const variant = {
        1: FeatureImg1,
        2: FeatureImg2,
        3: FeatureImg3
    }
    return (
        <article className="relative hidden w-full flex-col-reverse md:flex-row-reverse gap-3 md:gap-2">
            <div className="w-[80vw] m-auto md:w-[45%] md:pr-[10vw] md:pl-[3vw] animate-tab-content">
                <SectionHeading color="dark" text={title} />
                <p className="md:text-left">{text}</p>
                <Button color="blueSections" text="More.info" />
            </div>
            <div className="w-[80vw] m-auto md:w-[55%] md:pl-[10vw]">
                <img loading="lazy"
                    className="w-full object-contain aspect-7/5 object-top md:object-top-right animate-tab-content"
                    src={variant[tab]} />
            </div>
        </article>
    )
}