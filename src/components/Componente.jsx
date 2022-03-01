import { useState } from "react";



export function Componente() {
    const [number, setNumber] = useState(0);

    function increment() {
      setNumber(number + 1)
    }

    function decrement () {
        setNumber(number - 1)
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={increment}>
                Incrementear
            </button>
            <button onClick={decrement}>
                Decrementar
            </button>
        </div>
    )
}