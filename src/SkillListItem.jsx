import "./SkillListItem.css";

export default function SkillListItem({ skill }) {
    return (
        <li className="devskill">{skill.name} LEVEL {skill.level}</li>
    );
}