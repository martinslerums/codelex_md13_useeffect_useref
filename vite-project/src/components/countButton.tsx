import { useState } from 'react';
import styles from "./styles.module.css"


const ButtonWithCount = () => {
    const [state, setState] = useState( {countOne: 0, countTwo: 0} )
    const countOne = state.countOne
    const countTwo = state.countTwo

    const incrementCounter = () => {
        setState(prevState => {
            return {
// ja vienu counteri neierakstītu tad tiktu override un rādītos tikai viens counteris kurš tika returnots
                countOne: prevState.countOne + 1,
                countTwo: prevState.countTwo + 2  
            }
        })
    }

    return ( 
        <div className={styles. wrapper}>
            <button className={styles.btn} onClick={incrementCounter}>Count: {countOne}</button>
            <div className={styles.doubleCount}> {countTwo}</div>
        </div>
     );
}
 
export default ButtonWithCount ;

// const ButtonWithCount = () => {
//     const [countOne, setCoountOne] = useState(0)
//     const [countTwo, setCountTwo] = useState(0)

//     const incrementCounter = () => {
//         setCoountOne(prevCount => prevCount + 1)
//         setCountTwo(prevCount => prevCount + 2) 
//     }
