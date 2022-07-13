import React from 'react'
import '../App.css'
import {useSelector,useDispatch} from 'react-redux'
import {Deleteposts} from '../redux/reducers'

const Result = () => {
  const {items} = useSelector(state=>state.Alldata);
  const dispatch = useDispatch();
  return (
    <div className='Result'>
       <h1>Result</h1>
       {items.length>0?items.map(val=>(
        <div className='Allresult' key={val.id}>
           <div className='posting'>
              <h1>{val.tilte}</h1>
              <h1>{val.desc}</h1>
              <div className='towce'>
                <button className='Submit'>Read</button>
                <button className='Submit' onClick={()=>dispatch(Deleteposts(val.id))}>Delete</button>
             </div>
         </div>  
       </div>
       )):'No Posts'}
    </div>
  )
}

export default Result