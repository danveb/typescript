// Type alias vs interface 

// type UserProps = {
//   name: string; 
//   age: number; 
// }

// interface IUserProps {
//   name: string;
//   age: number;
// }

// "intersection"
// type TUserProps = {
//   name: string; 
//   age: number; 
// }

// type TAdminProps = TUserProps & {
//   role: string; 
// }

// "extending" 
// interface IUserProps {
//   name: string; 
//   age: number; 
// }

// interface IAdminProps extends IUserProps {
//   role: string; 
// }

// interface can only describe an Object 
// type alias can describe an Object and everything else (primitive types: string, number, boolean, etc.)

export default function User() {
  return (
    <div>Card</div>
  )
}