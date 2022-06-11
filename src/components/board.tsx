import React, { useEffect } from "react";
import * as THREE from 'three';

import { Canvas, RootState, useFrame, useThree  } from '@react-three/fiber'
import { Cell } from "./cell";

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
                size:{width:512, height:512},
            })
        }
    )
    return(null);
}
export const Board:React.FC = () =>{
    let cells = new Array<JSX.Element>()
    let color = true
    for (let i = 0; i<64; i++){
        cells.push(
            <Cell color={color? "white":"black"} position={[i%9 - 4,1,Math.floor(i/9)]}></Cell>
        )
        color = !color
    }
    return(
        <Canvas>
            <ThreeSettings/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {
                cells
            }
        </Canvas>
    );
}