export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    color: "redNav" | "redNews" | "blueHero" | "blueSections" | "grey" | "blueFeatures";
}