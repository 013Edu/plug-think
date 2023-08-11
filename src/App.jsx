import { Header } from "./components/Header"
import { SectionCards } from "./components/SectionCards"
import { SectionChoice } from "./components/SectionChoice"
import { SectionForm } from "./components/SectionForm"
import { SectionHeader } from "./components/SectionHeader"
import { SectionTextMain } from "./components/SectionTextMain"

function App() {

  return (
    <>
      <Header />
      <SectionHeader />
      <SectionTextMain />
      <SectionCards />
      <SectionForm />
      <SectionChoice />
    </>
  )
}

export default App
