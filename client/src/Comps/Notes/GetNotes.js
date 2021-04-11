import React, { useState } from "react";
import axios from "axios";
import NotesItem from "./NotesItem";
import styles from "./Notes.module.css";

const GetNotes = () => {
  const [params, setParams] = useState({
    university: "",
    subject: "",
    subTopic: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const { university, subject, subTopic } = params;

  const onChange = (e) =>
    setParams({ ...params, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/notes/find", params, {
      "Content-Type": "application/json",
    });
    if (res.data.message === "No Notes Found") {
      setError(res.data.message);
      setResult(null);
    } else {
      setError(null);
      setResult(res.data);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.formdiv}>
        <h1>Get Notes at your FingerTips</h1>

        {error && <h3>{error}</h3> }

        <form className={styles.getform} onSubmit={handleSubmit}>
          <input
            type="text"
            name="university"
            value={university}
            onChange={onChange}
            placeholder="Enter Your University Name"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            placeholder="Enter subject"
          />
          <input
            type="text"
            name="subTopic"
            value={subTopic}
            onChange={onChange}
            placeholder="Enter Topic"
          />
          <input
            className={styles.btn}
            type="submit"
            value="Get Me Notes!"
          />
        </form>
      </div>
      <div className={(styles.result, styles.flex_box)}>
        {result &&
          result.map((note) => <NotesItem key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default GetNotes;
