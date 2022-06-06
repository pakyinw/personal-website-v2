import { Routes, Route } from "react-router-dom"
import Conversation from './conversation/Conversation' 
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Conversation/> } />
        <Route path="home" element={ <Conversation/> } />
        <Route path="conversation" element={ <Conversation/> } />
      </Routes>
    </div>
  );
}

export default App;
