import {ADD_TAG,DELETE_LAST_TAG} from './types'

export const addTag =(tag)=>{
  return{
  type:ADD_TAG,
  payload:tag
}}

export const deleteLastTag = ()=>{
  return{
    type:DELETE_LAST_TAG,
  }
}