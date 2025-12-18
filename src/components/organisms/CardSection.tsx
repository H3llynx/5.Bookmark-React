import CardContent from "../../config/cards.json";
import { Card } from "../molecules/Card/Card";

const cards = {
    chrome: { ...CardContent.chrome },
    firefox: { ...CardContent.firefox },
    opera: { ...CardContent.opera }
}

export function CardSection() {
    return (
        <section className="custom-width m-auto py-3 text-center">
            <h2 className="h2-dark">Download the extension</h2>
            <p className="m-auto lg:max-w-[40vw]">We've got more browsers in the pipeline. Please do let us know if
                you've got a favourite you'd like us to prioritize.</p>
            <div className="pt-3 p-2 flex justify-center items-start gap-3.5 flex-wrap lg:flex-nowrap sm:gap-2">
                <Card browser={cards.chrome} />
                <Card browser={cards.firefox} margin="lg:mt-2" />
                <Card browser={cards.opera} margin="lg:mt-4" />
            </div>
        </section>
    )
}