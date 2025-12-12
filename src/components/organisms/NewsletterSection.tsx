import { Form } from "../molecules/Form"

export function NewsletterSection() {

    return (
        <section id="newsletter" className="w-full m-auto py-4.5 mt-6 bg-blue text-center">
            <span className="text-white uppercase font-medium text-xs tracking-[5px]">35.000+ already joined</span>
            <h2 className="text-white w-[80vw] m-auto md:max-w-[30vw] mt-0.5 mb-2 md:my-2.5">
                Stay up-to-date with what we're doing
            </h2>
            <Form />
        </section>
    )
}