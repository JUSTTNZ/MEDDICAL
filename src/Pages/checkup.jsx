import { Contact } from "../Abouts/contact"
import { CheckupHero } from "../Checkup.jsx/checkuphero"
import { SingleCheckup } from "../Checkup.jsx/SingleCheckup"

import { Team } from "../Checkup.jsx/team"


export const Checkupservice = () => {
    return(
        <div>
      <CheckupHero />
      <SingleCheckup />
      <Team />
        <Contact />
        </div>
    )
}