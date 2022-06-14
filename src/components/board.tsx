import React, { useEffect } from "react";
import * as THREE from 'three';

import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import { Cell } from "./cell";
import { useSelector } from "react-redux";
import { getBoardFigures } from "../app/boardSlice";
import { RootState } from "../app/store";
import { Figure } from "./figure";

function ThreeSettings(){
    const set = useThree((state)=>state.set)
    const cam = useThree((state)=>state.camera)
    useEffect(
        ()=>{
            cam.far = 500
            cam.near = 0.1
            cam.updateProjectionMatrix();

            cam.rotation.set(-Math.PI/4,0,0)
            cam.position.set(0,6,7)
            set({
                size:{width:1024, height:512},
            })
        }
    )
    return(null);
}
export const Board:React.FC = () =>{
    let state = useSelector((state:RootState)=>getBoardFigures(state))
    let cells = new Array<JSX.Element>()
    let color = true
    for (let i = 0; i<64; i++){
        color = (((i%8) +Math.floor(i/8)) %2 == 0)
        cells.push(
            <Cell color={color? "white":"black"} position={[i%8 - 4,1,Math.floor(i/8)-2]}></Cell>
        )
    }

    let figuries =  new Array<JSX.Element>()
    state.map((params) =>{
        figuries.push(<Figure position={params.position} id={params.id} type={params.type}></Figure>)
    })
    let objects = cells.concat(figuries)
    return(
        <Canvas>
            <ThreeSettings/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {
                objects
            }


        </Canvas>
    );
}