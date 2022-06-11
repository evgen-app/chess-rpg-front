import React, { useRef, useState } from "react";
import { Canvas, useFrame, Vector3 } from '@react-three/fiber'

interface CellIE{
    position:Vector3
    color: string
}


export const Cell:React.FC<CellIE> = (props:CellIE) => {
    const mesh = useRef()

    return(
            <mesh
            position={props.position}
            ref={mesh as any}
            scale={1}>
                <boxGeometry args={[1, 0.5, 1]} />
                <meshStandardMaterial color={props.color} />
            </mesh>
    );
}