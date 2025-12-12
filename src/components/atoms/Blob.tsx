export function Blob({ location }: { location: "hero" | "features" }) {
    const variant = {
        hero: "blob right-0 rounded-l-[12rem] top-[9.5%] md:top-[35%] md:w-[38%]",
        features: "blob left-0 rounded-r-[12rem] top-[8%] md:top-[20%] md:w-[50%] md:aspect-[15/8]"
    }
    return (
        <div className={variant[location]}>
        </div>
    )
}