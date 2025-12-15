interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color: "redNav" | "redNews" | "blueHero" | "blueSections" | "grey" | "blueFeatures";
}

const variants = {
  redNav: "my-button uppercase py-[0.9rem] px-[0.8rem] border-white md:w-auto md:px-2 md:py-[0.7rem] md:bg-red md:text-white md:border-red md:hover:bg-white md:hover:text-red w-full group-has-checked:mt-2",
  redNews: "my-button font-medium py-[0.9rem] px-[0.8rem] border-red bg-red text-sm text-white md:px-[1.6rem] md:py-[0.75rem] md:w-auto md:hover:bg-white md:hover:text-red w-full",
  blueHero: "my-button blue-button py-[0.9rem] px-[0.8rem] md:px-[1.6rem]",
  blueSections: "my-button blue-button py-[0.8rem] px-[1.5rem]",
  blueFeatures: "my-button blue-button py-[0.8rem] px-[1.5rem] hidden md:block",
  grey: "my-button font-medium py-[0.8rem] px-[0.8rem] border-grey-btn bg-grey-btn text-grey-dark md:px-[1.6rem] hover:bg-white hover:border-grey-dark"
}

export function Button({ children, color }: ButtonProps) {
  return (
    <button className={variants[color]}
      tabIndex={0}>{children}
    </button>
  )
}

