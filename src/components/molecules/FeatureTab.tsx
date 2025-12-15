
import type { TabContent } from "../../config/types"
import { Button } from "../atoms/Button"

export function FeatureTab(tab: TabContent) {

    return (
        <article className="mt-4 md:text-left w-full flex flex-col-reverse md:flex-row-reverse gap-3 md:gap-2 md:mt-0">
            <div className="w-[80vw] m-auto animate-tab-content md:w-[45%] md:pr-[10vw] md:pl-[3vw]">
                <h2 className="h2-dark">{tab.title}</h2>
                <p className="mb-2">{tab.text}</p>
                <Button color="blueFeatures">More info</Button>
            </div>
            <div className="w-[80vw] m-auto animate-tab-content md:w-[55%] md:pl-[10vw]">
                <img loading="lazy"
                    className="w-full md:px-3 md:py-2 object-contain aspect-7/5 object-top md:object-top-right"
                    src={tab.img} />
            </div>
        </article>
    )
}