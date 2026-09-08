import { useEffect, useState } from "react";
import { classNames } from "../utils.js";
import ExperienceForm from "./ExperienceForm.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

export default function ExperienceSection(props) {
  const { experience, setExperience, resetKey } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [editor, setEditor] = useState({ mode: null, activeId: null, snapshot: null });

  const activeExperience = experience.find(exp => exp.id === editor.activeId);

  useEffect(() => resetEditor(), [resetKey]);

  function resetEditor() {
    setEditor({ mode: null, activeId: null, snapshot: null });
  }

  function toggleSection() {
    setIsOpen(open => !open);
  }

  function createExperience() {
    const draft = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      visible: true
    };

    setEditor({ mode: "create", activeId: draft.id, snapshot: experience });
    setExperience([...experience, draft]);
  }

  function updateExperience(draft) {
    setExperience(experience.map(exp => exp.id === editor.activeId ? draft : exp));
  }

  function saveExperience() {
    resetEditor();
  }

  function cancelExperience() {
    setExperience(editor.snapshot);
    resetEditor();
  }

  function editExperience(id) {
    setEditor({ mode: "edit", activeId: id, snapshot: experience });
  }

  function deleteExperience() {
    setExperience(experience.filter(exp => exp.id !== editor.activeId));
    resetEditor();
  }

  function toggleExperience(id) {
    setExperience(experience.map(exp => exp.id === id ? { ...exp, visible: !exp.visible } : exp));
  }
  
  return (
    <div className="experience-section">
      <button className="experience-section__toggle" onClick={toggleSection}>
        <i className="fa-solid fa-briefcase"></i>
        <span className="experience-section__title">Experience</span>
        <i
          className={classNames(
            "fa-solid fa-chevron-down", "education-section__chevron",
            isOpen && "education-section__chevron--open"
          )}
        />
      </button>

      {isOpen && (
        <>
        {editor.mode === null && (
          <>
            <ul className="experience-section__list">
              {experience.map(exp => (
                <ExperienceItem
                  key={exp.id}
                  experience={exp}
                  editExperience={() => editExperience(exp.id)}
                  toggleExperience={() => toggleExperience(exp.id)}
                />
              ))}
            </ul>
  
            <button className="experience-section__add-btn" onClick={createExperience}>
              + Experience
            </button>
          </>
        )}
  
        {(editor.mode === "create" || editor.mode === "edit") && activeExperience && (
          <ExperienceForm
            experience={activeExperience}
            updateExperience={updateExperience}
            saveExperience={saveExperience}
            cancelExperience={cancelExperience}
            deleteExperience={editor.mode === "edit" ? deleteExperience : null}
          />
        )}        
        </>
      )}
    </div>
  );
}
