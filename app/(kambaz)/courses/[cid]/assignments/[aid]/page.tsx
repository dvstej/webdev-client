import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />

      <input
        id="wd-name"
        defaultValue={
          aid === "A1"
            ? "A1 - ENV + HTML"
            : aid === "A2"
            ? "A2 - CSS + TAILWIND"
            : aid === "A3"
            ? "A3 - JAVASCRIPT + REACT"
            : aid
        }
      />

      <br />
      <br />

      <textarea
        id="wd-description"
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
      />

      <br />
      <br />

      <label htmlFor="wd-points">Points</label>
      <br />
      <input id="wd-points" defaultValue="100" />

      <br />
      <br />

      <label htmlFor="wd-group">Assignment Group</label>
      <br />
      <select id="wd-group" defaultValue="ASSIGNMENTS">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>

      <br />
      <br />

      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <br />
      <select id="wd-display-grade-as" defaultValue="Percentage">
        <option value="Percentage">Percentage</option>
      </select>

      <br />
      <br />

      <label htmlFor="wd-submission-type">Submission Type</label>
      <br />
      <select id="wd-submission-type" defaultValue="Online">
        <option value="Online">Online</option>
      </select>

      <br />
      <br />

      <strong>Online Entry Options</strong>

      <br />

      <input
        id="wd-text-entry"
        type="checkbox"
      />
      <label htmlFor="wd-text-entry">Text Entry</label>

      <br />

      <input
        id="wd-website-url"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-website-url">Website URL</label>

      <br />

      <input
        id="wd-media-recordings"
        type="checkbox"
      />
      <label htmlFor="wd-media-recordings">
        Media Recordings
      </label>

      <br />

      <input
        id="wd-student-annotation"
        type="checkbox"
      />
      <label htmlFor="wd-student-annotation">
        Student Annotation
      </label>

      <br />

      <input
        id="wd-file-upload"
        type="checkbox"
      />
      <label htmlFor="wd-file-upload">
        File Uploads
      </label>

      <br />
      <br />

      <label htmlFor="wd-assign-to">Assign to</label>
      <br />
      <input
        id="wd-assign-to"
        defaultValue="Everyone"
      />

      <br />
      <br />

      <label htmlFor="wd-due-date">Due</label>
      <br />
      <input
        id="wd-due-date"
        type="date"
        defaultValue="2026-05-13"
      />

      <br />
      <br />

      <label htmlFor="wd-available-from">
        Available from
      </label>
      <br />
      <input
        id="wd-available-from"
        type="date"
        defaultValue="2026-05-06"
      />

      <br />
      <br />

      <label htmlFor="wd-available-until">Until</label>
      <br />
      <input
        id="wd-available-until"
        type="date"
        defaultValue="2026-05-20"
      />

      <br />
      <br />

      <Link
        id="wd-cancel"
        href={`/courses/${cid}/assignments`}
      >
        Cancel
      </Link>

      {" "}

      <Link
        id="wd-save"
        href={`/courses/${cid}/assignments`}
      >
        Save
      </Link>
    </div>
  );
}