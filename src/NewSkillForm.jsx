import "./NewSkillForm.css";

export default function NewSkillForm() {
    return (
        <form>
            <label>Skill<input className="bar"></input></label>
            <label>Level<select className="dropdown"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label>
            <button>ADD SKILL</button>
        </form>
    );
}