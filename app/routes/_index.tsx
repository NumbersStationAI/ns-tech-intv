import { ActionFunctionArgs, json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import { User, addUser, updateUser, users } from "~/data/users";

// Server side logic, runs on a GET request
export async function loader() {
  return json({ users });
}

// Server side logic, run on a POST request
export async function action({ request }: ActionFunctionArgs) {
  const newUser = await request.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // 10% chance of error
  if (Math.random() > 0.9) {
    return json({ state: "error" });
  }
  if (request.method === "PUT") {
    updateUser(newUser);
  }
  console.log(request.method, newUser);
  if (request.method === "POST") {
    addUser(newUser);
  }
  return json({ state: "success" });
  // When this finishes the loader() will automically run
  // again and send fresh data to the client
}

export default function HomePage() {
  const getResponse = useLoaderData<typeof loader>();
  const users = getResponse.users;

  const fetcher = useFetcher();
  const handleAddNewUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.target as HTMLFormElement);

    const newUser = {} satisfies Omit<User, "id">;

    // This makes a POST request to the action function
    fetcher.submit(newUser, { method: "POST", encType: "application/json" });
  };

  const handleUpdateUser = (user: User) => {
    fetcher.submit(user, { method: "PUT", encType: "application/json" });
  };

  return (
    <div className="p-6 h-full w-full flex flex-col gap-6">
      <h1 className="font-semibold text-lg">
        Welcome to User Management Software
      </h1>
      <form onSubmit={handleAddNewUser} className="flex flex-col gap-2 ">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="border"
        />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" className="border" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="border" />
        <button type="submit" className="bg-gray-200 rounded w-fit p-2">
          Add user
        </button>
      </form>
      <ol>
        {users.map((u) => {
          return (
            <li key={u.id} style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => handleUpdateUser({ ...u, first_name: "test" })}
              >
                {u.first_name}
              </button>
              <button>{u.last_name}</button>
              <button>{u.email}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
