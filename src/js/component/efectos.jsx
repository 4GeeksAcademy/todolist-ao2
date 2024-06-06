import React, { useEffect, useState } from "react"

const Efectos = () => {

    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)

    useEffect(() => {

        console.log("componente montado")

    }, [contador, contador2])


    return (
        <>
            <div>Efectos con React</div>
            Contador: {contador}
            <button onClick={() => setContador(contador + 1)}>Incrementar 1</button>
            Contador2: {contador2}
            <button onClick={() => setContador2(contador2 + 1)}>Incrementar 2</button>
        </>
    )
}


export default Efectos