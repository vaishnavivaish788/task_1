import React, { useState } from 'react';
import './App.css';
import './rev.css';

function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleTextAreaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    const filteredWords = words.filter((word) => word !== '');
    setWordCount(filteredWords.length);
  };

  return (
    <div class="container">
      <h1 class="kal">Responsive page for word<br></br> counter</h1>
      <textarea type='text' onChange={handleTextAreaChange} class="vas"></textarea>
      <p class="p">Word Count: {wordCount}</p>
    </div>
  );
}

export default App;