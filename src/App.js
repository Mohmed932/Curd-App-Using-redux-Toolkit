import React from 'react'
import Posts from './components/Posts'
import Result from './components/Result'

const App = () => {
  return (
    <div className='App'>
       <h1>Curd App Using redux Toolkit</h1>
       <Posts/>
       <Result/>
    </div>
  )
}

export default App