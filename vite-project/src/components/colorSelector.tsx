import { useState, ChangeEvent, ReactElement, ReactNode } from "react";
import styles from "./styles.module.css";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [divs, setDivs] = useState<ReactNode[]>([]);

  const handleClick = () => {
    const newDiv: ReactElement = (
      <div
        key={divs.length} // uz katru jauno length ir +1 thus this works
        style={{
          backgroundColor: selectedColor,
          width: "50px",
          height: "50px",
          margin: "5px",
        }}
      ></div>
    );
    setDivs((prevDivs) => [...prevDivs, newDiv]);
  };

  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
        <div className={styles. wrapper}>
        <button className={styles.btn} onClick={handleClick}>
            +
        </button>
        <select
            className={styles.input}
            value={selectedColor}
            onChange={handleColorChange}
        >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
        </select>
        </div>
      <div className={styles.wrapper}>
        {divs.map((oneDiv, index) => (
          <div key={index}>{oneDiv}</div>
        ))}
      </div>
    </>
  );
};

export default ColorSelector;
