import { useState } from "react";
import { Blob } from "../atoms/Blob";
import { SectionHeading } from "../atoms/SectionHeading";
import { TabButton } from "../atoms/TabButton";
import { FeatureTab } from "../molecules/FeatureTab";

export function FeatureSection() {
    const [tab, setTab] = useState("tab1");

    return (
        <section className="relative w-full m-auto py-4.5 text-center">
            <Blob location="features" />
            <SectionHeading color="dark" text="Features" />
            <p className="custom-width m-auto text-center lg:max-w-[40vw]">Our aim is to make it quick and easy for you to access between your devices so you can access them on the go.</p>
            <div className="flex flex-wrap justify-center pt-3" role="tablist" aria-label="Bookmark features">
                <TabButton text="Simple Bookmarking" disabled={tab === "tab1"} onClick={() => setTab("tab1")} />
                <TabButton text="Speedy Searching" disabled={tab === "tab2"} onClick={() => setTab("tab2")} />
                <TabButton text="Speedy Searching" disabled={tab === "tab3"} onClick={() => setTab("tab3")} />

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