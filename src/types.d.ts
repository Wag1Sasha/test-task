/// <reference types="react-scripts" />



type IPropsFetchedPhotos =  {
  fetchedPhotos:(IPropsHits|never)[]
}

type IPropsImageList = {
  images: (IPropsHits|never)[]
}
interface IPropsPhotos {
  photos:IPropsFetchedPhotos
}
interface IPropsHits {
  comments?:number
  downloads?:number,
  favorites?: number
  id?: number
  imageHeight?: number
  imageSize?: number
  imageWidth?: number
  largeImageURL: string
  likes?: number
  pageURL?: string
  previewHeight?: number
  previewURL?: string
  previewWidth?: number
  tags?: string
  type?: string
  user?: string
  userImageURL?: string
  user_id?: number
  views?: number
  webformatHeight?: number
  webformatURL?: string
  webformatWidth?: number
}


type ParamTypesTag = {
  tag:string
}

type ParamTypesUrl = {
  url:string
}

type ITagsProps = {
  tag1:string,
  tag2:string,
  tag3:string
}

type TagsType = {
  tags:string[] 
}

interface DeleteTagActionType {
  type: string
  payload: number
}

interface addTagActionType {
  type: string
  payload: TagsType<string>
}

type TagsActionTypes = addTagActionType | DeleteTagActionType

interface StateTagsType {
  lastTags:(string|undefined)[]
}
interface TagsState {
  tags:StateTagsType
}
type A = undefined[]
type B = string[]
type Subject = (string | undefined)[]

interface PropsTypeTagsList {
  handleClick:(tag:string|undefined)=>void,
  handleDelete:(id:number)=>void,
  tagsState:Subject
}

