interface ButtonProps {
  text: string;
  color: "red" | "blue";
}

export function Button({ text, color }: ButtonProps) {

  const variants = {
    red: "my-button uppercase py-0.9 px-0.8 md:px-2 md:py-0.5 md:bg-red md:text-white md:hover:bg-white md:hover:text-red border-2 border-solid border-red",
    blue: "my-button font-medium py-[0.9rem] px-[0.8rem] md:px-[1.6rem] bg-blue text-white border-blue md:hover:bg-white md:hover:text-blue"
  }

  return (
    <button className={variants[color]}
      tabIndex={0}>{text}
    </button>
  )
}

