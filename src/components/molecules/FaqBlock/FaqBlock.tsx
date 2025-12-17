import { faq } from "../../../config/content-config"
import { Details } from "../../atoms/Details/Details"

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