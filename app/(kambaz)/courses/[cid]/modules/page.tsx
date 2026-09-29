import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>

      <select>
        <option>Publish All</option>
        <option>Publish all modules and items</option>
        <option>Publish modules only</option>
        <option>Unpublish all</option>
      </select>

      <button>+ Module</button>
      <ul id="wd-modules">
  <Module title="Week 1">
    <Lesson title="LEARNING OBJECTIVES">
      <li>Introduction to the course</li>
      <li>Learn what is Web Development</li>
      <li>Creating a development environment</li>
      <li>Creating a Web Application</li>
      <li>Getting started with the 1st assignment</li>
    </Lesson>

    <Lesson title="READING">
      <li>Full Stack Developer - Chapter 1 - Introduction</li>
      <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
    </Lesson>

    <Lesson title="SLIDES">
      <li>Introduction to Web Development</li>
      <li>Creating an HTTP server with Node.js</li>
      <li>Creating a React Application</li>
    </Lesson>
  </Module>
  <Module title="Week 2">
  <Lesson title="LEARNING OBJECTIVES">
    <li>Learn how to create user interfaces with HTML</li>
    <li>Keep working on assignment 1</li>
    <li>Deploy the assignment to Netlify</li>
  </Lesson>

  <Lesson title="READING">
    <li>Full Stack Developer - Chapter 1 - Introduction</li>
    <li>
      Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
    </li>
  </Lesson>
</Module>
<Module title="Week 3">
  <Lesson title="LEARNING OBJECTIVES">
    <li>Learn how to create user interfaces with HTML</li>
  </Lesson>

  <Lesson title="READING">
    <li>CSS Styling</li>
  </Lesson>
</Module>
</ul>
    </div>
  );
}