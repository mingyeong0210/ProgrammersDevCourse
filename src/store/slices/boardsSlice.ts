import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean,
    boardArray: IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: '첫 번째 게시물',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'List 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'Task 1',
                            taskDescription: 'Description',
                            taskOwner: 'mingyeong'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'Task 2',
                            taskDescription: 'Description',
                            taskOwner: 'mingyeong'
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'List 2',
                    tasks: [
                        {
                            taskId: 'task-3',
                            taskName: 'Task 3',
                            taskDescription: 'Description',
                            taskOwner: 'mingyeong'
                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        }
    }
})

export const {addBoard} = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;