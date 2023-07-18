import { parse } from "path";
import { useState } from "react"

export const CheckNumber = () => {
    const [number, setNumber] = useState('0');
    const [errorMessage, setErrorMessage] = useState('');

    const isEven = parseInt(number) % 2 === 0;

    return(
        <div>
            <h1>Even or Odd component</h1>
            <input 
                type="text"  
                name="number" 
                placeholder="Type a number"
                value={number}
                onChange={event => {
                    const rawValue = event.target.value

                    const numberValue = parseInt(rawValue)
                    setNumber(rawValue);


                    if(isNaN(numberValue)){
                        setErrorMessage('Type a number please!')
                        return;
                    }

                    setErrorMessage('')
                }}
            />
        
            <p>{isEven ? 'Odd' : 'Even'}</p>

            <p>{errorMessage}</p>
        </div>
    )
}