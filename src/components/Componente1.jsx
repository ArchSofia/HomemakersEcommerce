import React from 'react'
import { useState, useEffect } from "react"
import { Button } from '@chakra-ui/react';

const Componente1 = () => {
    
useEffect(() => {
  console.log("Componente montado")

  const [mensaje, setMensaje] = useState("Primer mensaje");

  return () => {
    <>
    <div><p>{mensaje}</p></div>
    <Button onClick={()=> setMensaje("Mensaje modificado")}></Button>
    </>
  }
}, [third])



const [counter, setCounter] = useState(0);
  return (<>
    <div>{counter}</div>
    <Button onClick={()=> setCounter(counter +1)}>Counter</Button>
    </>
  )
}

export default Componente1