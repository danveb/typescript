import Button from "../components/Button"; 

export default function Home() {
  // handleClick 
  // const handleClick = () => {
  //   console.log("Clicked"); 
  // };

  return (
    // <main className="min-h-screen flex justify-center items-center">
    //   <Button backgroundColor="red" textColor="green" fontSize={30} pillShape={true} padding={[5, 10, 20, 50]}/>
    // </main>

    // #2
    // <main className="min-h-screen flex justify-center items-center">
    //   <Button style={{
    //     backgroundColor: "blue", 
    //     fontSize: 14, 
    //     color: "white",
    //     padding: "1rem 2rem", 
    //     borderColor: "transparent", 
    //     borderRadius: "5px", 
    //   }}/>
    // </main>

    // #3 pass an onClick to Button component 
    // <main className="min-h-screen flex justify-center items-center">
    //   <Button handleClick={handleClick} />
    // </main>

    // #4 explicitly use a component and pass as children to make it MOST REUSABLE
    <main className="min-h-screen flex justify-center items-center">
      <Button>Custom Button</Button>
    </main>

    /****************************************************************************************************/
  )
}