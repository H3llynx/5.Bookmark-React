interface SectionHeadingProps {
    text: string,
    color: "dark" | "light"
}

const variant = {
    dark: "my-1.5 text-blue-dark",
    light: "text-white w-[80vw] m-auto md:max-w-[30vw] mt-0.5 mb-2 md:my-[2.3rem]"
}

export function SectionHeading({ text, color }: SectionHeadingProps) {
    return (
        <h2 className={variant[color]}>{text}
        </h2>
    )
}