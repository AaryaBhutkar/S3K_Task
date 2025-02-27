import React, { useState } from 'react';

const TextEditor = ({ value, onChange }) => {
  const [text, setText] = useState(value || '');

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange(newText);
  };

  const applyFormatting = (format) => {
    const textarea = document.getElementById('summary-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    let formattedText = '';
    let cursorPosition = 0;

    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorPosition = 2;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        cursorPosition = 1;
        break;
      case 'uppercase':
        formattedText = selectedText.toUpperCase();
        cursorPosition = 0;
        break;
      case 'lowercase':
        formattedText = selectedText.toLowerCase();
        cursorPosition = 0;
        break;
      default:
        break;
    }

    const newText = text.substring(0, start) + formattedText + text.substring(end);
    setText(newText);
    onChange(newText);

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      if (selectedText.length > 0) {
        textarea.setSelectionRange(start + cursorPosition, start + formattedText.length - cursorPosition);
      } else {
        textarea.setSelectionRange(start + formattedText.length, start + formattedText.length);
      }
    }, 0);
  };

  const handleSave = () => {
    // In a real app, this would save to a database or API
    alert('Summary saved!');
  };

  return (
    <div className="h-[600px] flex flex-col">
      <div className="flex space-x-2 mb-2">
        <button 
          onClick={() => applyFormatting('bold')}
          className="px-3 py-1 rounded bg-purple-700 text-white font-bold"
        >
          Bold
        </button>
        <button 
          onClick={() => applyFormatting('italic')}
          className="px-3 py-1 rounded bg-purple-700 text-white italic"
        >
          Italic
        </button>
        <button 
          onClick={() => applyFormatting('uppercase')}
          className="px-3 py-1 rounded bg-purple-700 text-white"
        >
          Uppercase
        </button>
        <button 
          onClick={() => applyFormatting('lowercase')}
          className="px-3 py-1 rounded bg-purple-700 text-white"
        >
          Lowercase
        </button>
        <button 
          onClick={handleSave}
          className="px-3 py-1 rounded bg-purple-700 text-white ml-auto"
        >
          Save
        </button>
      </div>
      
      <textarea
        id="summary-editor"
        className="flex-1 p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Edit the summary here..."
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextEditor;