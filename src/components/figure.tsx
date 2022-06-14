import React, { useRef, useState } from "react";
import { Canvas, useFrame, Vector3 } from '@react-three/fiber'
import { FigureIE, FigurePositionIE, getBoardActive, getBoardFigures, setBoardActive } from "../app/boardSlice";
import { skipPartiallyEmittedExpressions } from "typescript";
import { hover } from "@testing-library/user-event/dist/types/convenience";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";



export const Figure:React.FC<FigureIE> = (props:FigureIE) => {
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    let boardActive = useSelector((state: RootState) => getBoardActive(state))
    let dispath = useDispatch()

    const onClick = () =>{
        if (boardActive == false){
            
            // dispath(setBoardActive(true))
            setActive(true)
        }
    }


    const mesh = useRef()
    let color;
    if (props.type == "elephant"){
        color = "red"
    }
    else if (props.type == "rook"){
        color="blue"
    }
    else{
        color = "yellow"
    }
    color = hover?  "green":color
    color = active? "purple":color
    return(
            <mesh
            position={[props.position.col-5, 1.5, props.position.row-3 ]}
            ref={mesh as any}
            scale={1}
            onPointerOver={()=>setHover(true)}
            onPointerOut={()=>setHover(false)}
            onPointerDown={()=>setActive(true)}
            >
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color={color} />
            </mesh>
    );
}