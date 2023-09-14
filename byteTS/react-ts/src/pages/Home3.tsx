import GenericsButton from "../components/GenericsButton";

// #2 use of generics

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <GenericsButton countValue={5} countHistory={[10, 20, 30]}/>
    </main>
  )
}