import { Contact } from "../Abouts/contact"
import { Blog } from "../News/newsBlog"
import { NewsHero } from "../News/newshero"


export const News = () => {
    return(
        <div>
        <NewsHero />
        <Blog />
        <Contact />
        </div>
    )
}