import { CardSection } from "../components/organisms/CardSection"
import { FaqSection } from "../components/organisms/FaqSection"
import { Footer } from "../components/organisms/Footer"
import { Header } from "../components/organisms/Header"
import { HeroSection } from "../components/organisms/HeroSection"
import { NewsletterSection } from "../components/organisms/NewsletterSection"

export function HomePage() {

    return (
        <>
            <Header />
            <HeroSection />
            <CardSection />
            <FaqSection />
            <NewsletterSection />
            <Footer />
        </>
    )
}