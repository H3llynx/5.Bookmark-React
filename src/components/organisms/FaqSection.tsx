import { Button } from "../atoms/Button/Button"
import { FaqBlock } from "../molecules/FaqBlock"

export function FaqSection() {
  return (
    <section className="custom-width m-auto py-3 text-center">
      <h2 className="h2-dark">Frequently Asked Questions</h2>
      <p className="m-auto lg:max-w-[40vw]">Here are some of our FAQs. If you have any other questions you'd
        like answered please feel free to email us.</p>
      <FaqBlock />
      <Button color="blueSections">More info</Button>
    </section>
  )
}