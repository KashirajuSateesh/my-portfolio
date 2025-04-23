import {groq} from "next-sanity";

export const HOME_QUERY = groq`{
  "profile": *[_type == "profile"][0]{
    titleName,
    "ProfilePic": ProfilePic.asset->url
  }
}`