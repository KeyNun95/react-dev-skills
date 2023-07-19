import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from "./SkillList";
import NewSkillForm from './NewSkillForm';
import './App.css'


// const skills = [
//   { name: "HTML", level: 5 },
//   { name: "CSS", level: 3 },
//   { name: "JavaScript", level: 4},
//   { name: "Python", level: 2},
// ];

function App() {
console.log('useState is..', useState);
const [skills, setskills] = useState([
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4},
  { name: "Python", level: 2},
])

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      
      <NewSkillForm />
    </div>
  )
};

export default App
