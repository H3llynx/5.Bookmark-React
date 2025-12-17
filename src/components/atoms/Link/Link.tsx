import type { LinkProps } from "./Link.types"

export function Link(props: LinkProps) {
  return (
    <a className="
        uppercase
        text-center
        hover-red
        group-has-checked: block
        group-has-checked:w-full
        group-has-checked:text-white 
        group-has-checked:py-1.5
        group-has-checked:border-y-[0.8px]
      group-has-checked:border-border"
      {...props} tabIndex={0}>{props.children}
    </a>
  )
}