export default function EducationItem(props) {
  const { education, editEducation, toggleEducation } = props;

  function handleToggle(e) {
    e.stopPropagation();
    toggleEducation();
  }

  return (
    <li className="education-item" onClick={editEducation}>
      <span className="education-item__school">{education.school}</span>
      <button className="education-item__toggle-btn" onClick={handleToggle}>
        <i className={education.visible ? "fa-regular fa-eye eye" : "fa-regular fa-eye-slash"}></i>
      </button>
    </li>
  );
}
