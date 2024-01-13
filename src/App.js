import "font-awesome/css/font-awesome.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Index from "./components"
const App = ()=>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App