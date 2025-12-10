interface LinkProps {
  text: string;
  link: string;
}

export function Link({ text, link }: LinkProps) {
  return (
    <a className="
        uppercase
        text-center
        text-[12px]
        tracking-[2px]
        font-medium
        text-grey-dark
        transition duration-400
        md:hover:text-red"
      href={link} tabIndex={0}>{text}
    </a>
  )
}