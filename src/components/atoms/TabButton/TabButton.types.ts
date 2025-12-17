import type { Ref } from 'react';

export type TabButtonProps = {
    children: React.ReactNode;
    ref: Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;