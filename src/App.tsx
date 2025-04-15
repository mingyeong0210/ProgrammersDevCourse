import { useState } from 'react'
import { appContainer, board, buttons } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListContainer from './components/ListContainer/ListContainer'
import { useTypedSelector } from './hooks/redux'
import EditModal from './components/EditModal/EditModal'

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  const modalActive =  useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;
  
  return (
    <div className={appContainer}>
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>

      {modalActive ? <EditModal /> : null}

      <div className={board}>
        <ListContainer lists = {lists} boardId={getActiveBoard.boardId}/>
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
