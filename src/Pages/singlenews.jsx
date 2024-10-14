import { Contact } from "../Abouts/contact"

import { BlogSingle } from "../singleNews/Post"

import { SingleNewsHero } from "../singleNews/singlenewshero"


export const SingleNews = () => {
    return(
        <div>
        <SingleNewsHero />
        <BlogSingle />
        <Contact />
        </div>
    )
}