import { Contact } from "../Abouts/contact"

import { Testmonial } from '../Abouts/testmonial'


import { News } from '../Abouts/news'
import { DocHero } from "../Doctors/dochero"
import { Doctors } from "../Doctors/doctors"
export const Doctor = () => {
    return(
        <div>
        <DocHero/>
        <Doctors />
        <Testmonial />
        <News />
        <Contact />
        </div>
    )
}