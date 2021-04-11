import React from "react";
import { Link } from "react-router-dom";
import styles from "./Notes.module.css";

const NotesItem = ({ note }) => {
  return (
    <div className={styles.card} >
      <h1 className={styles.heading_primary} >{note.subject}</h1>
      <h4 className={styles.heading_secondary} >{note.subTopic}</h4>
      <p>size: {Math.round(note.size / 1024)}KB</p>
      <a target="_blank" href={`/${note.path}`}>
        Get This File
      </a>
      <p>Uploaded By: {note.owner}</p>
    </div>
  );
};

export default NotesItem;
