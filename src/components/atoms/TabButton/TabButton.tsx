import { forwardRef } from 'react';
import type { TabButtonProps } from './TabButton.types';


export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
    function TabButton({ children, ...props }, ref) {
        return (
            <button
                ref={ref}
                tabIndex={0}
                className="relative w-full py-1 text-grey-md transition duration-1200 text-base cursor-pointer
      tracking-[1px] border-b border-separators md:border-t-0 md:mb-1 md:w-auto md:px-3 md:py-1.5
      disabled:text-blue-dark disabled:after:absolute disabled:after:w-full disabled:after:bottom-0
      disabled:after:h-[3px] disabled:after:bg-red disabled:after:translate-x-[-50%] disabled:md:after:translate-none
      disabled:after:left-[50%] disabled:md:after:left-0 disabled:after:animate-tabs-45 disabled:md:after:animate-tabs"
                {...props}
            >
                {children}
            </button>
        );
    }
);