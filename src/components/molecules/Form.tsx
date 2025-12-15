import { Button } from "../atoms/Button";
import { InputContainer } from "./InputContainer";

export function Form() {

    return (
        <form className="flex gap-1 items-start justify-center max-w-[80vw] m-auto flex-col sm:flex-row">
            <InputContainer />
            <Button color="redNews">Contact us</Button>
        </form>
    )
}