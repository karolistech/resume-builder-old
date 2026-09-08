import { useEffect, useState } from "react";
import { classNames } from "../utils.js";
import EducationForm from "./EducationForm.jsx";
import EducationItem from "./EducationItem.jsx";

export default function EducationSection(props) {
  const { education, setEducation, resetKey } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [editor, setEditor] = useState({ mode: null, activeId: null, snapshot: null });
  
  const activeEducation = education.find(edu => edu.id === editor.activeId);

  useEffect(() => resetEditor(), [resetKey]);

  function resetEditor() {
    setEditor({ mode: null, activeId: null, snapshot: null });
  }

  function toggleSection() {
    setIsOpen(open => !open);
  }
  
  function createEducation() {
    const draft = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      visible: true
    };

    setEditor({ mode: "create", activeId: draft.id, snapshot: education });
    setEducation([...education, draft]);
  }
  
  function updateEducation(draft) {
    setEducation(education.map(edu => edu.id === editor.activeId ? draft : edu));
  }

  function saveEducation() {
    resetEditor();
  }

  function cancelEducation() {
    setEducation(editor.snapshot);
    resetEditor();
  }

  function editEducation(id) {
    setEditor({ mode: "edit", activeId: id, snapshot: education });
  }

  function deleteEducation() {
    setEducation(education.filter(edu => edu.id !== editor.activeId));
    resetEditor();
  }

  function toggleEducation(id) {
    setEducation(education.map(edu => edu.id === id ? { ...edu, visible: !edu.visible } : edu));
  }

  return (
    <div className="education-section">
      <button className="education-section__toggle" onClick={toggleSection}>
        <i className="fa-solid fa-graduation-cap"></i>
        <span className="education-section__title">Education</span>
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
              <ul className="education-section__list">
                {education.map(edu => (
                  <EducationItem
                    key={edu.id}
                    education={edu}
                    editEducation={() => editEducation(edu.id)}
                    toggleEducation={() => toggleEducation(edu.id)}
                  />
                ))}
              </ul>
    
              <button className="education-section__add-btn" onClick={createEducation}>
                + Education
              </button>
            </>
          )}
    
          {(editor.mode === "create" || editor.mode === "edit") && activeEducation && (
            <EducationForm
              education={activeEducation}
              updateEducation={updateEducation}
              saveEducation={saveEducation}
              cancelEducation={cancelEducation}
              deleteEducation={editor.mode === "edit" ? deleteEducation : null}
            />
          )}
        </>
      )}
    </div>
  );
}
