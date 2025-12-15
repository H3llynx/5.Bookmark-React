import FeatureImg1 from "../assets/images/illustration-features-tab-1.svg"
import FeatureImg2 from "../assets/images/illustration-features-tab-2.svg"
import FeatureImg3 from "../assets/images/illustration-features-tab-3.svg"
import LogoChrome from "../assets/images/logo-chrome.svg"
import LogoFirefox from "../assets/images/logo-firefox.svg"
import LogoOpera from "../assets/images/logo-opera.svg"

export const tabs = {
    tab1:
    {
        label: "Simple Bookmarking",
        title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        img: FeatureImg1
    },
    tab2:
    {
        label: "Speedy Searching",
        title: "Intelligent search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        img: FeatureImg2
    },
    tab3:
    {
        label: "Easy Sharing",
        title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with other. Create a shareable link that you can send at the click of a button.",
        img: FeatureImg3
    }
}

export const cards = {
    chrome:
    {
        title: "Add to Chrome",
        version: "Minimum version 62",
        img: LogoChrome
    },
    firefox:
    {
        title: "Add to Firefox",
        version: "Minimum version 55",
        img: LogoFirefox
    },
    opera:
    {
        title: "Add to Opera",
        version: "Minimum version 46",
        img: LogoOpera
    }
}

export const faq = {
    detail1: {
        summary: "What is Bookmark?",
        text: `Integer vulputate diam id blandit dapibus. Curabitur auctor elit nec magna tristique tempus.
        Curabitur ornare, odio vel sagittis consequat, erat justo posuere felis, ut consectetur lorem
        tellus in justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Sed consequat sed est ac bibendum. Vivamus sed viverra risus, non ultricies
        quam. Vivamus eros sem, porta eget dolor id, porta ornare ipsum. Mauris ultricies maximus purus.`
    },
    detail2: {
        summary: "How can I request a new browser?",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus diam egestas sapien ullamcorper,
        eget elementum magna luctus. Donec gravida purus lorem, placerat dapibus sapien ullamcorper malesuada. Aliquam
        auctor, urna vitae facilisis accumsan, lacus elit laoreet libero, at bibendum arcu sem sit amet diam. Praesent
        eu mollis erat, ut malesuada magna.`
    },
    detail3: {
        summary: "Is there a mobile app?",
        text: `Aenean aliquet molestie ante, quis commodo augue accumsan id. Nam at urna in ligula venenatis
        dignissim non egestas ipsum. Vivamus luctus dictum enim, a posuere mauris efficitur non. Praesent lobortis
        blandit nisl viverra ultrices. Suspendisse molestie erat ultrices eros fringilla congue. Donec augue eros,
        ultrices eget faucibus non, vulputate et metus. Etiam facilisis dui vel bibendum hendrerit.`
    },
    detail4: {
        summary: "What about other Chromium browsers?",
        text: `Duis consequat, est at efficitur eleifend, mi ipsum tincidunt ex, sed tristique nunc dolor sed
        ligula. Sed ac pellentesque erat. Integer aliquam semper rhoncus. Integer aliquam elementum
        nulla, vitae tempor eros efficitur sit amet. Nullam mauris magna, suscipit at tempor non, interdum in lorem.`
    }
}