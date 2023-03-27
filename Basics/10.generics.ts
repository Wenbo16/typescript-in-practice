interface User {
  name: string;
  age: number;
  gender: 'F' | 'M';
  cnOnly: string;
  sgOnly: string;
}

// export async function getUser() {
//   const response = await fetch('');
//   const user: User = await response.json();
//   return user
// }

// const user = await getUser();
// user.cnOnly


// solution

interface User {
  name: string;
  age: number;
  gender: 'F' | 'M';
}

interface UserCN extends User {
  cnOnly: string;
}

interface UserSG extends User {
  sgOnly: string
}


export async function getUser<T>() {
  const response = await fetch('');
  const user: T = await response.json();
  return user
}
const user = await getUser<UserCN>();
user.cnOnly
