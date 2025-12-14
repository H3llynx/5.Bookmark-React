interface TabButtonProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function TabButton({ text, disabled, onClick }: TabButtonProps) {
    return (
        <button
            tabIndex={0}
            onClick={onClick}
            disabled={disabled}
            className="relative w-full py-[1rem] text-grey-md transition duration-1200 text-base cursor-pointer
            tracking-[1px] border-b-1 border-separators md:border-t-0 md:mb-1 md:w-auto md:px-3 md:py-[1.5rem]
            disabled:text-blue-dark disabled:after:absolute disabled:after:w-full disabled:after:bottom-0
            disabled:after:h-[3px] disabled:after:bg-red disabled:after:translate-x-[-50%] disabled:md:after:translate-none
            disabled:after:left-[50%] disabled:md:after:left-0 disabled:after:animate-tabs-45 disabled:md:after:animate-tabs">{text}
        </button>
    )
}