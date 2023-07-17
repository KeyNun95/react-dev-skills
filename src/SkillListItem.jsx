export default function SkillListItem({ skill }) {
    return (
        <li>{skill.name} LEVEL {skill.level}</li>
    );
}