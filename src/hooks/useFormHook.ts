import { showLoader, hideLoader } from './../redux/ducks/PhotosDucks';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTag, eventSubmit, dragNDrop } from '../redux/ducks/TagsDucks';
import { asyncFetchPhotos } from '../redux/ducks/PhotosDucks';

export const useFormHook = () => {
  const dispatch = useDispatch();
  const tags = (state: TagsState) => state.tags.tags;
  const tagsState = useSelector(tags);
  const images = (state: IPropsPhotos) => state.photos.fetchedPhotos;
  const imagesState = useSelector(images);
  const isLoading = (state: IPropsPhotos) => state.photos.isLoading;
  const loaderState = useSelector(isLoading);

  const handleDelete = (index: number) => {
    dispatch(deleteTag(index));
  };

  const handleAddition = (tag: TagPropsType) => {
    dispatch(eventSubmit(tag));
    dispatch(showLoader());
    dispatch(asyncFetchPhotos(tag.text));
    setTimeout(() => {
      dispatch(hideLoader());
    }, 1000);
  };

  const dragNDropHandler = (tag: { id: string; text: string }, currPos: number, newPos: number) => {
    const newTags = tagsState.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    dispatch(dragNDrop([...newTags]));
  };

  return { tagsState, imagesState, handleDelete, handleAddition, dragNDropHandler, loaderState };
};
