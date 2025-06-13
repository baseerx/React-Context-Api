import CounterContext from "./CounterContext";
import {useState} from "react";

function CounterContextProvider({children}) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    );
}


export default CounterContextProvider;

