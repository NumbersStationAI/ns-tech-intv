export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

export const addUser = (user: Omit<User, "id"> & { id?: number }) => {
  if (user.id == null) {
    user.id = Math.floor(Math.random() * 1000) + 1;
  }
  users.push(user as User);
};

export const updateUser = (user: User) => {
  const existingIdx = users.findIndex((u) => u.id === user.id);
  if (existingIdx > 0) users.splice(existingIdx, 1, user);
};

export const users: User[] = [
  {
    id: 1,
    first_name: "Evania",
    last_name: "Thame",
    email: "ethame0@unicef.org",
  },
  {
    id: 2,
    first_name: "Hurleigh",
    last_name: "Fucher",
    email: "hfucher1@exblog.jp",
  },
  {
    id: 3,
    first_name: "Eden",
    last_name: "Janoschek",
    email: "ejanoschek2@is.gd",
  },
  {
    id: 4,
    first_name: "Natal",
    last_name: "Geddes",
    email: "ngeddes3@wikia.com",
  },
  {
    id: 5,
    first_name: "Stacey",
    last_name: "Robbie",
    email: "srobbie4@booking.com",
  },
];
