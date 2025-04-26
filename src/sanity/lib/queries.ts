import {groq} from "next-sanity";

export const HOME_QUERY = groq`{
  "profile": *[_type == "profile"][0]{
    titleName,
    "ProfilePic": ProfilePic.asset->url,
    "roles": roles[]{myrole},
    "header": headQuote,
    "Resume": resume.asset->url
  },
  "skills": *[_type == "skills"]{
    skill,
    "icon": icon.asset->url,
  }
}`;