
import Jumbotron from "./components/Jumbotron"
import NavBar from "./components/NavBar"
import History from "./components/History"
import Specials from "./components/Specials"
import { cocktails, drinks, images, laurels } from "./data"
import ChefsWord from "./components/ChefsWord"
import Laurels from "./components/Laurels"
import Spotlight from "./components/Spotlight"
import ContactInfo from "./components/ContactInfo"
import Footer from "./components/Footer"
import Newsletter from "./components/Newsletter"

export default function Home() {
  return (
    <div className=" scrollbar overflow-y-auto flex flex-col gap-96 w-full h-full p-2 bg-black">
      <NavBar />
      <Jumbotron />
      <History />
      <Specials cocktails={cocktails} drinks={drinks} />
      <ChefsWord />
      <Laurels laurels={laurels} />
      <Spotlight images={images} />
      <ContactInfo />
      <Newsletter />
      <Footer/>
    </div>
  )
}
