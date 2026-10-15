
import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  const assignmentName =
    aid === "A1" || aid === "123"
      ? "A1 - ENV + HTML"
      : aid === "A2" || aid === "124"
      ? "A2 - CSS + TAILWIND"
      : aid === "A3" || aid === "125"
      ? "A3 - JAVASCRIPT + REACT"
      : aid === "126"
      ? "A4 - Full Stack Web Development"
      : aid === "ai-a"
      ? "A9 - Sample assignment"
      : aid;

  const labelStyle = "mb-2 block font-semibold text-neutral-700";

  const inputStyle =
    "w-full rounded border border-neutral-300 bg-white p-2 text-sm";

  return (
    <div
      id="wd-assignments-editor"
      className="mx-auto max-w-4xl p-4"
    >
      {/* Assignment Name */}
      <div className="mb-5">
        <label htmlFor="wd-name" className={labelStyle}>
          Assignment Name
        </label>

        <input
          id="wd-name"
          type="text"
          defaultValue={assignmentName}
          className={inputStyle}
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label
          htmlFor="wd-description"
          className={labelStyle}
        >
          Description
        </label>

        <textarea
          id="wd-description"
          rows={8}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
          className={inputStyle}
        />
      </div>

      {/* Points */}
      <div className="mb-5">
        <label htmlFor="wd-points" className={labelStyle}>
          Points
        </label>

        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className={inputStyle}
        />
      </div>

      {/* Assignment Group */}
      <div className="mb-5">
        <label htmlFor="wd-group" className={labelStyle}>
          Assignment Group
        </label>

        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className={inputStyle}
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      {/* Display Grade As */}
      <div className="mb-5">
        <label
          htmlFor="wd-display-grade-as"
          className={labelStyle}
        >
          Display Grade as
        </label>

        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className={inputStyle}
        >
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      {/* Submission Type */}
      <div className="mb-5">
        <label
          htmlFor="wd-submission-type"
          className={labelStyle}
        >
          Submission Type
        </label>

        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className={inputStyle}
          >
            <option value="Online">Online</option>
          </select>

          {/* Online Entry Options */}
          <div className="mt-5">
            <h3 className="mb-3 font-semibold">
              Online Entry Options
            </h3>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  id="wd-text-entry"
                  type="checkbox"
                  className="h-4 w-4"
                />
                Text Entry
              </label>

              <label className="flex items-center gap-2">
                <input
                  id="wd-website-url"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4"
                />
                Website URL
              </label>

              <label className="flex items-center gap-2">
                <input
                  id="wd-media-recordings"
                  type="checkbox"
                  className="h-4 w-4"
                />
                Media Recordings
              </label>

              <label className="flex items-center gap-2">
                <input
                  id="wd-student-annotation"
                  type="checkbox"
                  className="h-4 w-4"
                />
                Student Annotation
              </label>

              <label className="flex items-center gap-2">
                <input
                  id="wd-file-upload"
                  type="checkbox"
                  className="h-4 w-4"
                />
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign To */}
      <div className="mb-5 rounded border border-neutral-300 p-4">
        <label
          htmlFor="wd-assign-to"
          className={labelStyle}
        >
          Assign to
        </label>

        <input
          id="wd-assign-to"
          type="text"
          defaultValue="Everyone"
          className={inputStyle}
        />

        {/* Due Date */}
        <div className="mt-5">
          <label
            htmlFor="wd-due-date"
            className={labelStyle}
          >
            Due
          </label>

          <input
            id="wd-due-date"
            type="date"
            defaultValue="2026-05-13"
            className={inputStyle}
          />
        </div>

        {/* Available Dates */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="wd-available-from"
              className={labelStyle}
            >
              Available from
            </label>

            <input
              id="wd-available-from"
              type="date"
              defaultValue="2026-05-06"
              className={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="wd-available-until"
              className={labelStyle}
            >
              Until
            </label>

            <input
              id="wd-available-until"
              type="date"
              defaultValue="2026-05-20"
              className={inputStyle}
            />
          </div>
        </div>
      </div>

      
{/* With AI - Sample Notes */}
<div className="mb-5">
  <label
    htmlFor="wd-ai-editor-notes"
    className="mb-2 block font-semibold text-neutral-700"
  >
    Sample notes
  </label>

  <textarea
    id="wd-ai-editor-notes"
    rows={4}
    placeholder="Enter sample notes here..."
    className="w-full rounded border border-neutral-300 bg-white p-3 text-sm"
  />
</div>


      {/* Cancel and Save */}
      <hr className="my-6 border-neutral-300" />

      <div className="flex justify-end gap-3">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-neutral-300 bg-neutral-100 px-5 py-2 text-sm text-neutral-700 no-underline hover:bg-neutral-200"
        >
          Cancel
        </Link>

        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="rounded bg-red-600 px-5 py-2 text-sm font-medium text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
