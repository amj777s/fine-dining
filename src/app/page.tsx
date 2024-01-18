
import Jumbotron from "./components/Jumbotron"
import NavBar from "./components/NavBar"
import History from "./components/History"
import Specials from "./components/Specials"
import { cocktails, drinks } from "./drinks"
import ChefsWord from "./components/ChefsWord"

export default function Home() {
  return (
    <div className=" overflow-y-auto flex flex-col gap-10 w-full h-full p-2 bg-black">
      <NavBar />
      <Jumbotron />
      <History />
      <Specials cocktails={cocktails} drinks={drinks} />
      <ChefsWord />
    </div>
  )
}
