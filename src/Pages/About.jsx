import { Contact } from "../Abouts/contact"
import { Doctors } from '../Abouts/doctors'
import { Testmonial } from '../Abouts/testmonial'
import { AboutHero } from '../Abouts/hero'
import { Welcome } from '../Abouts/welcome'
import { News } from '../Abouts/news'
export const About = () => {
    return(
        <div>
        <AboutHero />
        <Welcome />
        <Testmonial />
        <Doctors />
        <News />
        <Contact />
        </div>
    )
}