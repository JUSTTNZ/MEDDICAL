import { Contact } from "../Abouts/contact"
import { Checkup } from "../Services/Checkup"
import { SerivceHero } from "../Services/serviceshero"

export const Service = () => {
    return(
        <div>
        <SerivceHero />
        <Checkup />
        <Contact />
        </div>
    )
}