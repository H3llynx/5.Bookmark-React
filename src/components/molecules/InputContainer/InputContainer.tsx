import ErrorIcon from "../../../assets/images/icon-error.svg"
import { TextInput } from "../../atoms/TextInput/TextInput"

export function InputContainer() {

    return (
        <div
            className="group relative rounded-md has-user-invalid:bg-red has-user-invalid:border-2 has-user-invalid:border-red">
            <TextInput />
            <img src={ErrorIcon}
                className="hidden absolute right-[10px] top-[15px] group-has-user-invalid:block" />
            <p
                className="hidden text-white text-[0.7rem] text-italic text-left py-[0.2rem] px-0.5 group-has-user-invalid:block">
                Whoops, make sure it's an
                email</p>
        </div>
    )
}