import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { appContainer, board, buttons } from './App.css'

function App() {

  return (
    <div className={appContainer}>
      <div className={board}>

      </div>

      <div>
        <button className={buttons}>
          이 게시판 삭제하기
        </button>
        <button>
          활동 목록 보이기
        </button>
      </div>
    </div>
  )
}

export default App
