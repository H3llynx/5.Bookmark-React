import { Form } from "../molecules/Form/Form"

export function NewsletterSection({ id }: { id?: string }) {

    return (
        <section className="w-full m-auto py-4 mt-6 bg-blue text-center" id={id}>
            <span className="text-white uppercase font-medium text-xs tracking-[5px]">35.000+ already joined</span>
            <h2 className="h2-light">Stay up-to-date with what we're doing</h2>
            <Form />
        </section>
    )
}