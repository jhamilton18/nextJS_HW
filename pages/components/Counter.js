import React, {useState,useEffect} from "react";
export default function Counter(props){
    const [count, setCount] = useState(0);

    function rollOverCount(){
        if(count > 10){
            setCount(0);
        }
    }
    const buttonStyle={
        backgroundColor: "orange",
        color: "blue",
        padding: props.size + "rem",
        borderRadius: "15px",
    };
    useEffect(rollOverCount, [count]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1 * props.mult)} style={buttonStyle}>{props.name}</button>
        </div>
    );
}