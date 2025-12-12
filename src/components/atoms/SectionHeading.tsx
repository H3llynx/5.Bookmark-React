export function SectionHeading({ text, color }: { text: string, color: "dark" | "light" }) {
    const variant = {
        dark: "my-1.5 text-blue-dark text-center",
        light: "text-white w-[80vw] text-center m-auto md:max-w-[30vw] mt-0.5 mb-2 md:my-2.5"
    }
    return (
        <h2 className={variant[color]}>{text}
        </h2>
    )
}