import FaqContent from "../../../config/faq.json"
import { Details } from "../../atoms/Details/Details"

const faq = {
  detail1: { ...FaqContent.detail1 },
  detail2: { ...FaqContent.detail2 },
  detail3: { ...FaqContent.detail3 },
  detail4: { ...FaqContent.detail4 }
}

export function FaqBlock() {
  return (
    <div className="m-auto max-w-[550px] my-3.5 text-left border-separators sm:border-t">
      <Details {...faq.detail1} />
      <Details {...faq.detail2} />
      <Details {...faq.detail3} />
      <Details {...faq.detail4} />

    </div>
  )
}