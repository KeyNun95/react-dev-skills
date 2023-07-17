import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    const skillListItems = skills.map(s => <SkillListItem skill={s} />);
    return (
        <ul>
            {skillListItems}
        </ul>
    );
}