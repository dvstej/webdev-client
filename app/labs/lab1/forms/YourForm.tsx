export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-form-first-name">First name: </label>
      <input defaultValue="Jane" id="wd-your-form-first-name" /> <br />
      <label htmlFor="wd-your-form-last-name">Last name: </label>
      <input defaultValue="Doe" id="wd-your-form-last-name" /> <br />
      <label htmlFor="wd-your-form-student-id">Student ID: </label>
      <input
        type="password"
        defaultValue="000000000"
        id="wd-your-form-student-id"
      />
      <br />

      <h5>Bio</h5>
      <label htmlFor="wd-your-form-bio">Why I&apos;m taking this course: </label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={5}
        defaultValue="Sample bio: I am taking this course to learn full-stack web development with React and Next.js."
      />
      <br />

      <h5>Radio Buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-form-freshman" />
      <label htmlFor="wd-your-form-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-form-sophomore" />
      <label htmlFor="wd-your-form-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="radio-standing"
        id="wd-your-form-junior"
        defaultChecked
      />
      <label htmlFor="wd-your-form-junior">Junior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-form-senior" />
      <label htmlFor="wd-your-form-senior">Senior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-form-grad" />
      <label htmlFor="wd-your-form-grad">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="radio-enrollment"
        id="wd-your-form-fulltime"
        defaultChecked
      />
      <label htmlFor="wd-your-form-fulltime">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-your-form-parttime" />
      <label htmlFor="wd-your-form-parttime">Part-time</label>
      <br />

      <h5>Checkboxes</h5>
      <label>Topics I care about:</label>
      <br />
      <input
        type="checkbox"
        name="check-interests"
        id="wd-your-form-react"
        defaultChecked
      />
      <label htmlFor="wd-your-form-react">React</label>
      <br />
      <input
        type="checkbox"
        name="check-interests"
        id="wd-your-form-nextjs"
        defaultChecked
      />
      <label htmlFor="wd-your-form-nextjs">Next.js</label>
      <br />
      <input type="checkbox" name="check-interests" id="wd-your-form-mongodb" />
      <label htmlFor="wd-your-form-mongodb">MongoDB</label>
      <br />
      <input
        type="checkbox"
        name="check-interests"
        id="wd-your-form-typescript"
      />
      <label htmlFor="wd-your-form-typescript">TypeScript</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DA">Data Analytics</option>
        <option value="EE">Electrical Engineering</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />

      <label htmlFor="wd-your-form-topics">
        Topics to deepen this term:{" "}
      </label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={["REACT", "NEXTJS"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="MONGO">MongoDB</option>
        <option value="TS">TypeScript</option>
      </select>
      <br />

      <h5>Typed Fields</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input
        type="email"
        placeholder="jane@university.edu"
        id="wd-your-form-email"
      />
      <br />

      <label htmlFor="wd-your-form-grad-year">
        Expected graduation year:{" "}
      </label>
      <input
        type="number"
        defaultValue="2027"
        min={2024}
        max={2030}
        id="wd-your-form-grad-year"
      />
      <br />

      <label htmlFor="wd-your-form-dob">Birthday: </label>
      <input
        type="date"
        defaultValue="2003-01-01"
        min="1990-01-01"
        max="2010-12-31"
        id="wd-your-form-dob"
      />
      <br />

      <label htmlFor="wd-your-form-excitement">
        How excited are you about this course (0–10):{" "}
      </label>
      <input
        type="range"
        defaultValue="8"
        min="0"
        max="10"
        id="wd-your-form-excitement"
      />
      <br />

      <h5>Buttons</h5>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
