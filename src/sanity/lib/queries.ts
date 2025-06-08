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
  },
  "tools": *[_type == "tools"]{
    tool,
    "icon": icon.asset->url,
  },
}`

export const PROJECTS_QUERY = groq`{
  "project": *[_type == "project"]{
      _id,
      title,
      description,
      "imgUrl": image.asset->url,
      slug,
    },
}`

export const PROJECT_QUERY = groq`{
  "project": *[_type == "project" && slug.current == $slug][0]{
      title,
      shortdescription,
      description,
      "imgUrl": image.asset->url,
      slug,
      "Tech": techstack,
      objective,
      features,
      challenges,
      learnings,
      futureImprovements,
      link,
      repo,
      "screenshots": screenshots[].asset->url

    },
}`
;