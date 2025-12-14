import { useEffect, useRef, useState } from "react";
import { Blob } from "../atoms/Blob";
import { SectionHeading } from "../atoms/SectionHeading";
import { TabButton } from "../atoms/TabButton";
import { FeatureTab } from "../molecules/FeatureTab";


export function FeatureSection() {
    const [tab, setTab] = useState("tab1");
    const button1 = useRef<HTMLButtonElement>(null);
    const button2 = useRef<HTMLButtonElement>(null);
    const button3 = useRef<HTMLButtonElement>(null);
    const hasInteracted = useRef(false);

    const handleTabChange = (newTab: string) => {
        hasInteracted.current = true;
        setTab(newTab);
    };

    useEffect(() => {
        if (!hasInteracted.current) {
            return;
        }

        if (tab === "tab1") {
            button2.current?.focus();
        } else if (tab === "tab2") {
            button3.current?.focus();
        } else if (tab === "tab3") {
            button1.current?.focus();
        }
    }, [tab]);

    return (
        <section className="relative w-full m-auto py-4.5 text-center">
            <Blob location="features" />
            <SectionHeading color="dark" text="Features" />
            <p className="custom-width m-auto text-center lg:max-w-[40vw]">Our aim is to make it quick and easy for you to access between your devices so you can access them on the go.</p>
            <div className="flex flex-wrap justify-center w-[80vw] m-auto mt-3 border-separators border-t-1 md:border-none md:w-auto" role="tablist" aria-label="Bookmark features">
                <TabButton ref={button1} text="Simple Bookmarking" disabled={tab === "tab1"} onClick={() => handleTabChange("tab1")} />
                <TabButton ref={button2} text="Speedy Searching" disabled={tab === "tab2"} onClick={() => handleTabChange("tab2")} />
                <TabButton ref={button3} text="Speedy Searching" disabled={tab === "tab3"} onClick={() => handleTabChange("tab3")} />

                {tab === "tab1" &&
                    <FeatureTab tab={tab} title="Bookmark in one click" text="Organize your bookmarks however you like. Our simple drag-and-drop interface gives
              you complete control over how you manage your favourite sites."/>}

                {tab === "tab2" &&
                    <FeatureTab tab={tab} title="Intelligent search" text="Our powerful search feature will help you find saved sites in no time at all. No
              need to trawl through all of your bookmarks."/>}

                {tab === "tab3" &&
                    <FeatureTab tab={tab} title="Share your bookmarks" text="Easily share your bookmarks and collections with other. Create a shareable link that
              you can send at the click of a button."/>}

            </div>
        </section>
    )
}