import { useEffect, useRef, useState } from "react";
import { tabs } from "../../config/content-config";
import type { TabContent } from "../../config/types";
import { Blob } from "../atoms/Blob/Blob";
import { TabButton } from "../atoms/TabButton/TabButton";
import { FeatureTab } from "../molecules/FeatureTab";

export function FeatureSection({ id }: { id?: string }) {
    const [tab, setTab] = useState(tabs.tab1);
    const button1 = useRef<HTMLButtonElement>(null);
    const button2 = useRef<HTMLButtonElement>(null);
    const button3 = useRef<HTMLButtonElement>(null);
    const hasInteracted = useRef(false);

    const handleTabChange = (tabs: TabContent) => {
        hasInteracted.current = true;
        setTab(tabs);
    };

    useEffect(() => {
        if (!hasInteracted.current) {
            return;
        }

        if (tab === tabs.tab1) {
            button2.current?.focus();
        } else if (tab === tabs.tab2) {
            button3.current?.focus();
        } else if (tab === tabs.tab3) {
            button1.current?.focus();
        }
    }, [tab]);

    return (
        <section className="relative w-full m-auto py-4.5 text-center" id={id}>
            <Blob location="features" />
            <h2 className="h2-dark">Features</h2>
            <p className="custom-width m-auto text-center lg:max-w-[40vw]">Our aim is to make it quick and easy for you to access between your devices so you can access them on the go.</p>
            <div className="flex flex-wrap justify-center w-[80vw] m-auto mt-3 border-separators border-t md:border-none md:w-auto" role="tablist" aria-label="Bookmark features">
                <TabButton ref={button1} disabled={tab === tabs.tab1} onClick={() => handleTabChange(tabs.tab1)}>{tabs.tab1.label}</TabButton>
                <TabButton ref={button2} disabled={tab === tabs.tab2} onClick={() => handleTabChange(tabs.tab2)}>{tabs.tab2.label}</TabButton>
                <TabButton ref={button3} disabled={tab === tabs.tab3} onClick={() => handleTabChange(tabs.tab3)}>{tabs.tab3.label}</TabButton>

                {tab === tabs.tab1 &&
                    <FeatureTab {...tabs.tab1} />}

                {tab === tabs.tab2 &&
                    <FeatureTab {...tabs.tab2} />}

                {tab === tabs.tab3 &&
                    <FeatureTab {...tabs.tab3} />}

            </div>
        </section>
    )
}