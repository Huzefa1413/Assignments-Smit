import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div className="maindiv">
      <div className="top">
        <div className="right">
          <h1>Huzefa Mustafa</h1>
          <h3>Web Developer</h3>
          <h3>A-90, Block G | N.Naz | Karachi | 03357224192</h3>
          <h3>huzefamustafa1413@gmail.com</h3>
          <p>
            An eloquent and dedicated web developer seeking to use excellent web
            development skills to enhance the company.
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="smalldiv">
          <div>Education</div>
          <p>October 2020 - May 2024 -</p>
          <p>Bachelors of Science in Computer Science</p>
          <p>GPA: 3.86</p>
          <p>Sir Syed University of Engineering and Technology</p>
          <p>Karachi, Pakistan</p>
        </div>
        <div className="smalldiv">
          <div>Programming Languages</div>
          <p>C++</p>
          <p>C#</p>
          <p>JavaScript</p>
          <p>Python</p>
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<Hi />, document.querySelector("#root"));
