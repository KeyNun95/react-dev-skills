import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from "./SkillList";
import NewSkillForm from './NewSkillForm';
import './App.css'

function App() {
  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  )
};

export default App
