import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({addSkill}) {
    const [skill, setSkill] = useState({
        name: "",
        evel: "3",
    });

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e){
        console.log(e.target.value);

        setSkill({
            ...skill,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        addSkill(skill);
        setErrorMessage('');
        setSkill({
            name: "",
            level: "3",
        })
    }

    return (
        <>
        <span>{errorMessage ? errorMessage : ''}</span>
        <form onSubmit={handleSubmit}>
            <label>Skill
            <input
                className="bar"
                value={skill.name} 
                name="name" 
                onChange={handleChange} 
            />
            </label>
            <label>Level
            <select className="dropdown" name="Level" onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            </label>
            
            <button className="button">ADD SKILL</button>
        </form>
        </>
    );
}