import { tv } from 'tailwind-variants';
import "./Blob.css";

const blobVariants = tv({
    base: "blob",
    variants: {
        location: {
            hero: "right-0 rounded-l-[12rem] top-[9.5%] md:top-[35%] md:w-[38%]",
            features: "left-0 rounded-r-[12rem] top-[51%] md:top-[55%] md:w-[46%] md:aspect-[15/8]",
        }
    }
});


export function Blob({ location }: { location: "hero" | "features" }) {
    return (
        <div className={blobVariants({ location: location })}>
        </div>
    )
}