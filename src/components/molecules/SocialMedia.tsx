import { FacebookLink } from "../atoms/social-media/FacebookLink";
import { TwitterLink } from "../atoms/social-media/TwitterLink";

export function SocialMedia({ location }: { location: "top" | "bottom" }) {

    const variant = {
        top: "hidden justify-center text-white gap-2.5 mt-auto mb-O group-has-checked:flex",
        bottom: "flex gap-2.5 mt-1 mx-auto md:m-0"
    }
    return (
        <div className={variant[location]}>
            <FacebookLink link="#" />
            <TwitterLink link="#" />
        </div>
    )
}