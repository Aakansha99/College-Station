import React, { useEffect, useState } from "react";

const Editor = () => {
  const [data, setData] = useState({
    html: "",
    css: "",
    js: "",
    output: {
      __html:
        '<h1>I am Piyush</h1><style>h1{color: cyan}</style><script>console.log("test")</script>',
        
    },
  });

  const { html, css, js, output } = data;

  useEffect(() => {}, [html, css, js]);
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="container">
      <textarea
        name="html"
        className="html"
        placeholder="HTML Here..."
        value={html}
        onChange={onChange}
      />
      <textarea
        name="css"
        className="css"
        placeholder="CSS Here..."
        value={css}
        onChange={onChange}
      />
      <textarea
        name="js"
        className="js"
        placeholder="JavaScript Here..."
        value={js}
        onChange={onChange}
      />
      <div
        value={output}
        dangerouslySetInnerHTML={output}
        
        style={{
          width: "600px",
          height: "100px",
          background: "red",
          color: "white",
        }}
      />
      This is an editor
    </div>
  );
};

export default Editor;
