import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your value");
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);

  const handleClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCapital = () => {
    const words = text.split(" ");
    const wordCap = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    setText(wordCap);
  };

  const handleCount = () => {
    const countWords = text.split(" ");
    const words = countWords.filter((word) => word !== "").length;
    setWord(words);
    const countChar = /[a-zA-Z0-9]/g;
    setChar(text.match(countChar).length);
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div>
        <textarea
          className="form-control"
          id="textform"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <p className="my-3 mx-3">
          Text Summary : {word} words and {char} characters
        </p>
        <p className="my-3 mx-3">
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCapital}>
          Capitalization
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCount}>
          Count Words
        </button>
        <h2>Preview</h2>
        <p className="fw-light  border border-primary-subtle p-4">{text}</p>
      </div>
    </>
  );
}
