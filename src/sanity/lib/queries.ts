import {groq} from "next-sanity";

export const HOME_QUERY = groq`{
  "profile": *[_type == "profile"][0]{
    titleName,
    "ProfilePic": ProfilePic.asset->url,
    "diffprofilepic": diffprofilepic[].asset->url,
    "roles": roles[]{myrole},
    "header": headQuote,
    "About": about,
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
}`;

export const PROJECT_PAGE_QUERY = groq`{
  "project": *[_type == "project"],
  "banner": *[_type == "profile"][0].diffprofilepic[0].asset->url
}`;

export const PROJECTS_QUERY = groq`{
  "project": *[_type == "project"]{
      _id,
      title,
      description,
      "imgUrl": image.asset->url,
      slug,
    },
    "banner": *[_type == "profile"][0].diffprofilepic[0].asset->url
}`;

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
    }
}`;

export const EDUCATION_QUERY = groq`{
  "Education": *[_type == "education"] | order(startYear desc) {
    _id,
    slug,
    class,
    course,
    college,
    startYear,
    endYear
  }
}`;

export const EXPERIENCE_QUERY = groq`{
  "Experience": *[_type == "experience"] | order(startDate desc) {
  _id,
  slug,
  company,
  role,
  country,
  state,
  startDate,
  endDate
}
}`;

export const CERTIFICATE_QUERY = groq`{
  "Certificate": *[_type == "certificate"] | order(issueDate desc) {
  _id,
  firmName,
  certificateName,
  issueDate,
  "certificateImage": certificateImage.asset->url 
  }
}`;
