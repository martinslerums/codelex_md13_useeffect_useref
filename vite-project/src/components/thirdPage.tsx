import  { useRef, useState } from "react";
import styles from "./styles.module.css"
import React from "react";

const ThirdPage = () => {
    const [divs, setDivs] = useState<JSX.Element[]>([])
    const divRef = useRef<HTMLDivElement>(null)
    
    
    const handleClick = () => {
        divRef.current?.style && (divRef.current.style.backgroundColor = "gold");
    }

    const handleClone = () => {
        const clone = (
          <div
            style={{
              width: divRef.current?.style.width,
              height: divRef.current?.style.height,
              border: divRef.current?.style.border,
              backgroundColor: divRef.current?.style.backgroundColor,
            }}
          />
        );
    
        setDivs((prevDivs) => [...prevDivs, clone]);
      }
    
      const handleCorner = () => {
        divRef.current && (
            (divRef.current.style.position = "absolute"),
            (divRef.current.style.top = "0"),
            (divRef.current.style.right = "0")
        );
      };

    return ( 
        <>
            <div 
                className={styles.wrapper}
                ref={divRef}
                style={{
                    width: "75px",
                    height: "75px",
                    border: "1px solid black"
            }}
            >
            </div>
                {divs.map((div, index) => (
                    <React.Fragment key={index}>{div}</React.Fragment>  // <div key={index}>{div}</div> arī strādā React.Fragment === <></> (short-hand)
                ))}
            <div className={styles.wrapper}>
              <button className={styles.btn} onClick={handleClick}>Change color</button>
              <button className={styles.btn} onClick={handleClone}>Clone Div</button>
              <button className={styles.btn} onClick={handleCorner}>Send div to corner</button>
            </div>     
        </>
     );
}
 
export default ThirdPage


