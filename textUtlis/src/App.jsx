import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"


function App() {
 

  return (
    <>
    <Navbar />
    <div className="container my-5">
    <TextForm heading="Enter your text below :-" />
    </div>
    </>
  )
}

export default App
