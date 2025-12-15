import { cards } from "../../config/content-config";
import { SectionHeading } from "../atoms/SectionHeading";
import { Card } from "../molecules/Card";

export function CardSection() {
    return (
        <section className="custom-width m-auto py-3 text-center">
            <SectionHeading color="dark" text="Download the extension" />
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