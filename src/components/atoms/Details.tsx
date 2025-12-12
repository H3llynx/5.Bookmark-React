export function Details({ title, p }: { title: string, p: string }) {

    return (
        <details className="group m-auto max-w-[550px] py-[1.35rem] border-b border-separators">
            <summary
                className="flex justify-between items-center cursor-pointer text-[clamp(1rem,2vw,1.15rem)] text-grey-dark transition duration-400 md:hover:text-red">
                {title}
                <svg className="text-blue transition duration-400 group-open:text-red group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                </svg>
            </summary>
            <p className="leading-[2.3] pt-2 text-grey-md text-[clamp(0.9rem,2vw,1rem)] group-open:animate-fadeIn">
                {p}</p>
        </details>
    )
}