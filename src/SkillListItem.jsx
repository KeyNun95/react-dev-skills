import "./SkillListItem.css";

export default function SkillListItem({ skill }) {
    return (
        <li className="devskill">{skill.name}<span className="level">LEVEL {skill.level}</span></li>
    );
}