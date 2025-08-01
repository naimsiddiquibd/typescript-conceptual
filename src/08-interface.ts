// Interface
interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user1: IUser = {
  id: 1,
  name: "Naim Siddiqui",
  email: "naim@example.com",
  isActive: true,
};

const user2: IUser = {
  id: 2,
  name: "John Doe",
  email: "john@example.com",
  isActive: false,
};
const user3: IUser = {
  id: 3,
  name: "Jane Smith",
  email: "jane@example.com",
  isActive: true,
};

// Function Interface
interface IGetUser {
  (id: number): IUser | null;
}
const getUser: IGetUser = (id) => {
  const users: IUser[] = [user1, user2, user3];
  return users.find(user => user.id === id) || null;
}

