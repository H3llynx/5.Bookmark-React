import { SectionHeading } from "../atoms/SectionHeading"
import { Form } from "../molecules/Form"

export function NewsletterSection() {

    return (
        <section className="w-full m-auto py-4 mt-6 bg-blue text-center">
            <span className="text-white uppercase font-medium text-xs tracking-[5px]">35.000+ already joined</span>
            <SectionHeading color="light" text="Stay up-to-date with what we're doing" />
            <Form />
        </section>
    )
}