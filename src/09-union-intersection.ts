// Union -> |
// Intersection -> &

// Union Types
type ID = number | string;
type User = {
  id: ID;
  name: string;
};

// Intersection Types
type Admin = User & {
  role: "admin";
};

type Editor = User & {
  role: "editor";
};
type Viewer = User & {
  role: "viewer";
};
// Example usage
const admin: Admin = {
  id: 1,
  name: "Alice",
  role: "admin",
};
const editor: Editor = {
  id: "2",
  name: "Bob",
  role: "editor",
};
const viewer: Viewer = {
  id: 3,
  name: "Charlie",
  role: "viewer",
};
// Function using union and intersection types
function getUserInfo(user: User): string {
  return `User ID: ${user.id}, Name: ${user.name}`;
}  
// Example usage of the function
console.log(getUserInfo(admin)); // Output: User ID: 1, Name: Alice
console.log(getUserInfo(editor)); // Output: User ID: 2, Name: Bob
console.log(getUserInfo(viewer)); // Output: User ID: 3, Name: Charlie  