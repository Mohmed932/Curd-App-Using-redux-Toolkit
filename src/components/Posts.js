import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import {Addposts} from '../redux/reducers'

const Posts = () => {
  const dispatch = useDispatch();
  const [title,settitle]  = useState('');
  const [desc,setdesc]  = useState('');
  return (
    <div className='Posts'>
        <div className='allinput'>
          <p>Title</p>
          <input type='text' placeholder='Enter post title' onChange = {(e)=>settitle(e.target.value)}/>
        </div>
        <div className='allinput'>
          <p>Description</p>
          <input type='text' placeholder='Enter post Description' onChange = {(e)=>setdesc(e.target.value)}/>
        </div>
        <button className='Submit' onClick={() => dispatch(Addposts({title,desc}))}>Submit</button>
    </div>
  )
}

export default Posts