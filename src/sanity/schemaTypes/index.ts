import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { profileType } from './profileType'
import { skillsType } from './skillsType'
import { toolsType } from './toolsType'
import projectType from './projectType'
import educationType from './educationType'
import experienceType from './experienceType'
import certificateType from './certificateType'
import footerType from './footerType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, profileType, skillsType, toolsType, projectType, educationType, experienceType, certificateType, footerType],
}
