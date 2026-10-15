
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-4 text-3xl font-semibold">
        Profile
      </h1>

      <input
        id="wd-username"
        defaultValue="alice"
        placeholder="Username"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-password"
        type="password"
        defaultValue="123"
        placeholder="Password"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-dob"
        type="date"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-email"
        type="email"
        defaultValue="alice@wonderland.com"
        placeholder="Email"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <select
        id="wd-role"
        defaultValue="USER"
        className="mb-3 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </select>

      <Link
        id="wd-signout-btn"
        href="/account/signin"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
      >
        Signout
      </Link>
    </div>
  );
}
