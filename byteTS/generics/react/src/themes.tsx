import { ReactNode, useState } from "react"; 


export default function Themes() {
  // useState 
  const [selectedTheme, setSelectedTheme] = useState("light"); 
  
  const themeOptions = ["light", "dark", "system"]; 

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-5 font-semibold">Themes</h1>
      
      <ThemeOptions 
        themeOptions={themeOptions} 
        selectedTheme={selectedTheme} 
        onThemeClick={(theme) => setSelectedTheme(theme)} 
      />

      <p className="mt-10">Selected theme: <span className="font-bold">{selectedTheme}</span></p>
    </section>
  )
}

// we'll separate <ul> on its own component, and since it's related to the component we'll have on same file 

// function ThemeOptions<T>({
//   themeOptions, 
//   selectedTheme, 
// }: {
//   // there is a relationship because it's part of the same string[]
//   // we'll make it a generic function
//   themeOptions: T[]; 
//   selectedTheme: T; 
// }) {
//   return (
//     <ul className="list-disc">
//       {themeOptions.map((theme, index) => (
//         <li key={index}>
//           <button
//             onClick={() => setSelectedTheme(theme)}
//             className={theme === selectedTheme ? "font-bold" : ""}
//           >{theme}</button>
//         </li>
//       ))}
//     </ul>
//   )
// }

// define type ThemeOptionProps with type parameter (generic) 
type ThemeOptionProps<T> = {
  themeOptions: T[]; 
  selectedTheme: T; 
  onThemeClick: (theme: T) => void; 
}

function ThemeOptions<T extends ReactNode>({ themeOptions, selectedTheme, onThemeClick }: ThemeOptionProps<T>) {
  return (
    <ul className="list-disc">
      {themeOptions.map((theme, index) => (
        <li key={index}>
          <button
            onClick={() => onThemeClick(theme)}
            className={theme === selectedTheme ? "font-bold" : ""}
          >{theme}</button>
        </li>
      ))}
    </ul>
  )
}