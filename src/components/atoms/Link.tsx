interface LinkProps {
  text: string;
  link: string;
}

export function Link({ text, link }: LinkProps) {
  return (
    <a className="
        uppercase
        text-center
        text-grey-dark
        tracking-[2px]
        transition duration-400
        md:hover:text-red
        md:font-medium
        group-has-checked: block
        group-has-checked:w-full
        group-has-checked:text-white 
        group-has-checked:py-1.5
        group-has-checked:border-y-[0.8px]
      group-has-checked:border-border"
      href={link} tabIndex={0}>{text}
    </a>
  )
}