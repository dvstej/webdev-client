import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
    
<div className="mb-3 flex flex-wrap items-center gap-2">
  <button
    type="button"
    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
  >
    Collapse All
  </button>

  <button
    type="button"
    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
  >
    View Progress
  </button>

  <select
    defaultValue="publish-all"
    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
  >
    <option value="publish-all">Publish All</option>
  </select>

  <button
    type="button"
    className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
  >
    + Module
  </button>
</div>

    
<ul id="wd-modules" className="m-0 list-none p-0">

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

{/* On Your Own - Personal Module */}
<Module title="Week 4 - Advanced React Development">
  <Lesson title="REACT HOOKS">
    <li className="wd-content-item">
      Understanding useState and useEffect
    </li>
    <li className="wd-content-item">
      Building Interactive React Components
    </li>
  </Lesson>

  <Lesson title="NEXT.JS FUNDAMENTALS">
    <li className="wd-content-item">
      Introduction to Next.js App Router
    </li>
  </Lesson>
</Module>

{/* With AI - Sample Module */}
<Module title="Sample module (AI)">
  <Lesson title="Sample lesson (AI)">
    <li className="wd-content-item">
      Introduction to AI-generated learning content
    </li>
  </Lesson>
</Module>

</ul>
    </div>
  );
}