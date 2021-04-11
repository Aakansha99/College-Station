import React, { useState } from "react";
import axios from "axios";
import styles from "./Notes.module.css";

const UploadNotes = () => {
  const [notes, setNotes] = useState({
    subject: "",
    subTopic: "",
    university: "",
    NotesFile: null,
  });
  const [status, setStatus] = useState(null);

  const { subject, subTopic, university, NotesFile } = notes;

  const onChange = (e) =>
    setNotes({ ...notes, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("subject", subject);
    form.append("subTopic", subTopic);
    form.append("university", university);
    form.append("NotesFile", NotesFile);

    const res = await axios.post("/api/notes/create", form);

    if (res.data.status === "success") {
      setStatus("Notes has been uploaded");
      setTimeout(() => setStatus(null), 3000);
    }

    setNotes({ subject: "", subTopic: "", university: "", NotesFile: null });
  };

  const onUpload = (e) => {
    setNotes({ ...notes, NotesFile: e.target.files[0] });
  };

  return (
    <div className={styles.main, styles.flex_center} >
      {status && <span className={styles.msg}>{status}</span>}
      <form className={styles.uploadform} onSubmit={onSubmit}>
        <h2>Upload New Notes</h2>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={onChange}
        />
        <input
          type="text"
          name="subTopic"
          placeholder="Topic"
          value={subTopic}
          onChange={onChange}
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          value={university}
          onChange={onChange}
        />
        <input
          type="file"
          className={styles.fileinp}
          name="NotesFile"
          onChange={onUpload}
          formEncType="multipart/form-data"
        />
        <input className={styles.btn} type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default UploadNotes;
