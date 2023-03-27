interface UserProps {
  name: string;
  years?: number
  fullTime?: boolean;
}

const user: UserProps = {}


// interface Optional {
//   years: number
//   fullTime: boolean;
// }

// interface UserProps extends Partial<Optional> {
//   name: string;
// }

// const user: UserProps = {name: "Tom"}
