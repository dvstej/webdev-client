
import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

import { FaWandMagicSparkles } from "react-icons/fa6";



import {
  FaFileImport,
  FaCloudDownloadAlt,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
} from "react-icons/fa";


export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">
        Course Status
      </h2>

      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" />
          Unpublish
        </button>

        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" />
          Publish
        </button>
      </div>

  
{[
  { label: "Import Existing Content", icon: FaFileImport },
  { label: "Import from Commons", icon: FaCloudDownloadAlt },
  { label: "Choose Home Page", icon: FaHome },
  { label: "View Course Stream", icon: FaStream },
  { label: "New Announcement", icon: FaBullhorn },
  { label: "New Analytics", icon: FaChartBar },
  { label: "View Course Notifications", icon: FaBell },
].map(({ label, icon: Icon }) => (
  <button
    key={label}
    type="button"
    className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
  >
    <Icon className="mr-2 text-gray-600" />
    {label}
  </button>
))}

{/* With AI - Sample Status Action */}
<button
  id="wd-ai-status"
  type="button"
  className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
>
  <FaWandMagicSparkles className="mr-2 text-gray-600" />
  Sample action
</button>


    </div>
  );
}
