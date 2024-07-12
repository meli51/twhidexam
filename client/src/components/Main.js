import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>አቂዳ ፈተና 1</h1>

        <ol>
            <li> 20 ጥያቄዎች ይጠየቃሉ።</li>
            <li>ለትክክለኛው መልስ 5 ነጥብ ተሰጥቷል።</li>
            <li>ጥያቄው ከማለቁ በፊት መገምገም እና መልሶችን መቀየር ይችላሉ።</li>
            <li>እያንዳንዱ ጥያቄ ሶስት አማራጮች አሉት። አንድ አማራጭ ብቻ መምረጥ ይችላሉ</li>
            <li>ውጤቱ በጥያቄው መጨረሻ ላይ ይገለጻል።.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
