interface ButtonProps {
  text: string;
  color: "redNav" | "redNews" | "blue" | "grey";
}

export function Button({ text, color }: ButtonProps) {

  const variants = {
    redNav: "my-button uppercase py-[0.9rem] px-[0.8rem] border-white w-full md:w-auto md:px-2 md:py-[0.7rem] md:bg-red md:text-white md:hover:bg-white md:hover:text-red md:border-red group-has-checked:mt-2",
    redNews: "my-button font-medium py-[0.9rem] px-[0.8rem] border-red bg-red w-full text-sm text-white md:px-[1.6rem] md:py-[0.75rem] md:w-auto md:hover:bg-white md:hover:text-red",
    blue: "my-button font-medium py-[0.8rem] px-[0.8rem] border-blue bg-blue text-white md:px-[1.6rem] hover:text-blue hover:bg-white",
    grey: "my-button font-medium py-[0.8rem] px-[0.8rem] border-grey-btn bg-grey-btn text-grey-dark md:px-[1.6rem] hover:bg-white hover:border-grey-dark"
  }

  return (
    <button className={variants[color]}
      tabIndex={0}>{text}
    </button>
  )
}

