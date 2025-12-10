import { FacebookLink } from "../atoms/FacebookLink";
import { TwitterLink } from "../atoms/TwitterLink";

export function SocialMedia({ location }: { location: "top" }) {

    const variant = {
        top: "hidden justify-center gap-2.5 mt-auto mb-O group-has-checked:flex"
    }
    return (
        <div className={variant[location]}>
            <FacebookLink link="#" />
            <TwitterLink link="#" />
        </div>
    )
}