import { Button } from "../atoms/Button"
import { SectionHeading } from "../atoms/SectionHeading"
import { FaqBlock } from "../molecules/FaqBlock"

export function FaqSection() {
  return (
    <section className="custom-width m-auto py-3 text-center">
      <SectionHeading color="dark" text="Frequently Asked Questions" />
      <p className="m-auto lg:max-w-[40vw]">Here are some of our FAQs. If you have any other questions you'd
        like answered please feel free to email us.</p>
      <FaqBlock />
      <Button color="blueSections" text="More info" />
    </section>
  )
}