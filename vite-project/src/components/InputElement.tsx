import { useRef, useEffect, useState, ChangeEvent } from "react";
import styles from "./styles.module.css"

const FocusedInputElement = () => {
  const [value, setValue] = useState<string>("");
  const [inputValues, setInputValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputValues]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleButtonClicks = () => {
    if (value.trim() !== "") {
      setInputValues((prevInputValues) => 
      [...prevInputValues, value ])
      setValue("");
    }
    inputRef.current?.focus();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input className={styles.input} ref={inputRef} value={value} onChange={handleInputValue} />
        <button className={styles.btn} onClick={handleButtonClicks}>Focus</button>
      </div>
      <div>
        {inputValues.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default FocusedInputElement;

{
  /* <h1>Inspiring sculptors:</h1>
<input
  value={name}
  onChange={e => setName(e.target.value)}
/>
<button onClick={() => {
  setArtists([
    ...artists,
    { id: nextId++, name: name }
  ]);
}}>Add</button>
<ul>
  {artists.map(artist => (
    <li key={artist.id}>{artist.name}</li>
  ))}
</ul> */
}
