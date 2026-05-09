import { Routes, Route } from "react-router-dom"
import Categories from "./Pages/Categories.jsx"
import Synth_Catagory from "./Pages/Synth_VSTs.jsx"
import Piano_Category from "./Pages/Piano_VSTs.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/Synth_VSTs" element={<Synth_Catagory />} />
      <Route path="/Piano_VSTs" element={<Piano_Category />} />
    </Routes>
  )
}

export default App