import { useState } from "react";

import './App.css'

export default function Forms() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission reload
    alert(`I am ${username} 
      and then ${comment} 
      I choose ${topic}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>This is a website</h1>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Enter your name" value={username} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          <label>Comment:</label>
          <textarea
            rows={4}
            cols={20}
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <br />
        <div>
          <label>Topic:</label>
          <select value={topic} onChange={handleTopicChange}>
            <option value="">Select a topic</option>
            <option>Fullstack</option>
            <option>Python</option>
            <option>Java</option>
            <option>Web development</option>
            <option>Web design</option>
          </select>
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}