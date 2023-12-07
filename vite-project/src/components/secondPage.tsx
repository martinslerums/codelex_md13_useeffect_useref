import { useState, useEffect, ChangeEvent } from "react";
import styles from "./styles.module.css"

const SecondPage = () => {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(100);
    const [fontSize, setFontSize] = useState(count);
    const [initialRender, setInitialRender] = useState(true);


    useEffect(() => {
        if (initialRender) {
            console.log("First render");
            setInitialRender(false);
        } else {
            console.log("Render");
        }
    }, [input, count]);
    
    useEffect(() => {
        if (!initialRender) {
            console.log("Count change");
            setFontSize((prevSize) => prevSize + 1)
        }
    }, [count]);

    useEffect(() => {
        if (!initialRender) {
            console.log("Input change");
            document.title = input
        }
    }, [input]);

   
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
        
    }

    const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

 
    return ( 
        <div className={styles.second}>
            <div className={styles.wrapper}>
                <button
                    onClick={handleClick}
                    className={styles.btn}
                >
                +
                </button>
            </div>
            <span 
                style={{fontSize: `${fontSize}px`}}
                className={styles.span}
                >
                    Count: {count}
            </span>

            <div className={styles.wrapper}>  
                <input 
                    type="text" 
                    value={input}
                    onChange={handleInputValue}
                    className={styles.input}   
                />
            </div>
            <p className={styles.wrapper}>{input}</p>
        </div>
     );
}

export default SecondPage
