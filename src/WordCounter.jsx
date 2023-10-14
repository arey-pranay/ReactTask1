import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countWords = (text) => {
    // Remove leading and trailing white spaces, then split the text by spaces to count words.
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div>
      <h1>Pranay's Word Counter</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default WordCounter;
