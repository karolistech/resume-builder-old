export default function ExperienceItem(props) {
  const { experience, editExperience, toggleExperience } = props;

  function handleToggle(e) {
    e.stopPropagation();
    toggleExperience();
  }
  
  return (
    <li className="experience-item" onClick={editExperience}>
      <span className="experience-item__company">{experience.company}</span>
      <button className="experience-item__toggle-btn" onClick={handleToggle}>
        <i className={experience.visible ? "fa-regular fa-eye eye" : "fa-regular fa-eye-slash"}></i>
      </button>
    </li>
  );
}
