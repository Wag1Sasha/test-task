/// <reference types="react-scripts" />

type IPropsFetchedPhotos = {
  fetchedPhotos: (IPropsHits | never)[];
  isLoading: boolean;
};

type IPropsImageList = {
  images: (IPropsHits | never)[];
  loaderState: boolean;
};
interface IPropsModal {
  image: string;
  show: boolean;
  handleClose: () => void;
}
interface IPropsPhotos {
  photos: IPropsFetchedPhotos;
}
interface IPropsHits {
  comments?: number;
  downloads?: number;
  favorites?: number;
  id?: number;
  imageHeight?: number;
  imageSize?: number;
  imageWidth?: number;
  largeImageURL: string;
  likes?: number;
  pageURL?: string;
  previewHeight?: number;
  previewURL?: string;
  previewWidth?: number;
  tags?: string;
  type?: string;
  user?: string;
  userImageURL?: string;
  user_id?: number;
  views?: number;
  webformatHeight?: number;
  webformatURL?: string;
  webformatWidth?: number;
}

type ParamTypesTag = {
  tag: string;
};

type ParamTypesUrl = {
  url: string;
};

type ITagsProps = {
  tag1: string;
  tag2: string;
  tag3: string;
};

type TagsType = {
  tags: string[];
};

interface DeleteTagActionType {
  type: string;
  payload: number;
}

interface addTagActionType {
  type: string;
  payload: TagsType<string>;
}

type TagsActionTypes = addTagActionType | DeleteTagActionType;

interface StateTagsType {
  tags: TagPropsType[];
}
interface TagsState {
  tags: StateTagsType;
}
type A = undefined[];
type Tag = string[];
type Subject = (Tag | never)[];

interface PropsTypeTagsList {
  handleClick: (tag: string | undefined) => void;
  handleDelete: (id: number) => void;
  tagsState: (string | never)[];
}

interface TagPropsType {
  text: string;
  id: string;
}

interface dragHadlerType {
  tag: TagPropsType;
  currPos: number;
  newPos: number;
}

interface IFormHookProps {
  handleDelete: (index: number) => void;
  handleAddition: (tag: TagPropsType) => void;
  dragNDropHandler: (tag: { id: string; text: string }, currPos: number, newPos: number) => void;
  tagsState: TagsState;
  imagesState: IPropsPhotos;
}
