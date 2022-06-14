import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface FigurePositionIE{
    row: number
    col:number
}
export interface FigureIE{
    position:FigurePositionIE
    type:string
    id:number
}

export interface BoardStateIE{
    active: boolean,
    figures: FigureIE[]
}

let currentBoardState = {
    active:false,
    figures:[
        {
            position:{
                row:8,
                col:4
            },
            type:"pawn",
            id:0
        },
        {
            type:"elephant",
            id:1,
            position:{
                row:8,
                col:5
            }
        },
        {
            type:"rook",
            id:2,
            position:{
                row:8,
                col:6
            }
        }
    ] as FigureIE[]
} as BoardStateIE

const boardSlice = createSlice(
    {
        name:"boardSlice",
        initialState: currentBoardState,
        reducers:{
            setBoardActive(state, action:PayloadAction<boolean>){
                state.active = action.payload
            },
            addFigure(state, action:PayloadAction<FigureIE>){
                state.figures = state.figures.concat(action.payload)
            },
            removeFigure(state, action:PayloadAction<number>){
                let ind = -1;
                state.figures.forEach(figure => {
                    if (figure.id == action.payload){
                        ind = figure.id
                    } 
                });
                if(ind != -1){
                    state.figures = state.figures.splice(ind,1)
                }
                else{
                    console.error("id is missing");
                }
            },
            changeFigurePosition(state, action:PayloadAction<{id:number, pos:FigurePositionIE}>){
                let ind = -1;
                state.figures.forEach(figure => {
                    if (figure.id == action.payload.id){
                        ind = figure.id
                    } 
                });
                if(ind != -1){
                    state.figures[ind].position = action.payload.pos
                }
                else{
                    console.error("id is missing");
                }
            }
        }
    }
)

export const getBoardFigures = createSelector(
    (state:RootState) => state.figures,
    (field) => field
)
export const getBoardActive = createSelector(
    (state:RootState) => state.active,
    (field) => field
)
export const {
    changeFigurePosition,
    addFigure,
    removeFigure,
    setBoardActive
} = boardSlice.actions
export default boardSlice.reducer