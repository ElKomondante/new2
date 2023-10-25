import './AddPoststyle.css'
import { InputAdd } from '../InputAddPost';
import { useState, } from 'react';
import { Loader } from '../LoadingImg';
import { ImageListType, ImageType } from "react-images-uploading"
import { useDispatch } from "react-redux"
import { addPost, loadPosts } from "../redux/action-creators/posts-action-creators"

const AddPost = () =>{
  const [text, setText] = useState(""); 
  const [lessnum, setLessonNum] = useState(""); 
  const [emaurlil, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch();
  const [image, setImage] = useState({} as ImageType)
  const handleImageChange = (imageList: ImageListType) => {
    setImage(imageList[0])
  }
  const handleUrlChange = (ev: any) => { 
    { 
      setUrl(ev.target.value); 
      console.log()
    } 
  }; 

  const handleTextchange = (ev: any) => { 
    { 
      setText(ev.target.value); 
    } 
  }; 

  const handleLessonNumChange = (ev: any) => { 
    { 
      setLessonNum(ev.target.value); 
    } 
  }; 

  const handleTitlehange = (ev: any) => { 
    { 
      setTitle(ev.target.value); 
    } 
  }; 
  const handleDescriptionhange = (ev: any) => { 
    { 
      setDescription(ev.target.value); 
    } 
  }; 


  const handleConfirmed = () => {
    dispatch(addPost(
        {
            text,
            title,
            description,
            lessnum,
            image: image.file
        }
    ))
}


  return (
      <div className='addpost-body'>
          <div className='addpost-title'>ADD POST</div>
          <label className='addpost-input-URL'>Image</label>
            <br/>
            {/* <InputAdd
                type = 'text'
                onChange={handleUrlChange}
                value={text} 
            /> */}
            <Loader
                image={image}
                outerOnChange={handleImageChange}
                outerOnRemove={() => setImage({} as ImageType)} />
            <label className='addpost-input-text'>Text</label>
            <br/>
            <InputAdd
                type = 'number'
                placeholder = 'text'
                onChange={handleTextchange}
                value={text} 
            />
            <label className='addpost-input-lesson-num'>Lesson Num</label>
            <br/>
            <InputAdd
            value={lessnum}
            placeholder = 'Lesson number'
            onChange={handleLessonNumChange}
            />
            <label className='addpost-input-title'>Title</label>
            <br/>
            <InputAdd
                type = 'text'
                value= {title}
                placeholder = 'Title'
                onChange={handleTitlehange}
            />
            <label className='addpost-input-description'>Description</label>
            <br/>
            <InputAdd
                type = 'text'
                placeholder = 'Description'
                value={description}
                onChange={handleDescriptionhange}
            />
          <button
          onChange={handleConfirmed}>
          Add Post</button>
      </div>
  ) 
  }

export { AddPost }