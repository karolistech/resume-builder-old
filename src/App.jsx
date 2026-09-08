import { useEffect, useState } from "react";
import { empty, example } from "./resume.js";
import "./App.css";
import PersonalSection from "./components/PersonalSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";

export default function App() {
  const [resume, setResume] = useState(example);
  const [resetKey, setResetKey] = useState(0);
  const [editorView, setEditorView] = useState("content");
  const [layout, setLayout] = useState("top");
  const [theme, setTheme] = useState({ primary: "#0e374e", secondary: "#eef1f2" });
  const [font, setFont] = useState("sans");

  const personalInfo = Object.values(resume.personal).some(v => v !== "");
  const educationItems = resume.education.filter(edu => edu.visible);
  const experienceItems = resume.experience.filter(exp => exp.visible);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-secondary", theme.secondary);
  }, [theme]);

  function setPersonal(personal) {
    setResume(resume => ({ ...resume, personal }));
  }

  function setEducation(education) {
    setResume(resume => ({ ...resume, education }));
  }

  function setExperience(experience) {
    setResume(resume => ({ ...resume, experience }));
  }

  function clearResume() {
    setResume(empty);
    setResetKey(k => k + 1);
  }

  function loadExample() {
    setResume(example);
    setResetKey(k => k + 1);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button
          className="sidebar__btn"
          data-active={editorView === "content"}
          onClick={() => setEditorView("content")}
        >
          <i className="fa-regular fa-file-lines"></i>
          <span>Content</span>
        </button>
        <button
          className="sidebar__btn"
          data-active={editorView === "customize"}
          onClick={() => setEditorView("customize")}
        >
          <i className="fa-solid fa-pen-ruler"></i>
          <span>Customize</span>
        </button>
      </div>

      <div className="editor">
        <div className="editor__actions">
          <button className="editor__actions-clear-btn" onClick={clearResume}>
            <i className="fa-solid fa-trash"></i>
            <span>Clear Resume</span>
          </button>
          <button className="editor__actions-load-btn" onClick={loadExample}>
            <i className="fa-regular fa-file"></i>
            <span>Load Example</span>
          </button>
        </div>

        {editorView === "content" && (
          <>
            <PersonalSection personal={resume.personal} setPersonal={setPersonal} />
            <EducationSection education={resume.education} setEducation={setEducation} resetKey={resetKey} />
            <ExperienceSection experience={resume.experience} setExperience={setExperience} resetKey={resetKey} />          
          </>          
        )}

        {editorView === "customize" && (
          <>
            <div className="layout">
              <h2 className="layout__title">Layout</h2>
              <div className="layout__options">
                <button className="layout__btn" onClick={() => setLayout("top")}>
                  <div className="layout__icon-wrapper">
                    <div className="layout__icon layout__icon--top"></div>
                  </div>
                  Top
                </button>

                <button className="layout__btn" onClick={() => setLayout("left")}>
                  <div className="layout__icon-wrapper">
                    <div className="layout__icon layout__icon--left"></div>
                  </div>
                  Left
                </button>

                <button className="layout__btn" onClick={() => setLayout("right")}>
                  <div className="layout__icon-wrapper">
                    <div className="layout__icon layout__icon--right"></div>
                  </div>
                  Right
                </button>
              </div>
            </div>

            <div className="color">
              <h2 className="color__title">Color</h2>
              <div className="color__options">
                <label className="color__field">
                  <span className="color__label">Primary Color</span>
                    <input
                      type="color"
                      className="color__input"
                      value={theme.primary}
                      onChange={e => setTheme(theme => ({ ...theme, primary: e.target.value }))}
                    />
                </label>
                {/* <label className="color__field">
                  <span className="color__label">Secondary Color</span>
                  <div className="color__wrapper">
                    <input
                      type="color"
                      className="color__input"  
                      value={theme.secondary}
                      onChange={e => setTheme(theme => ({ ...theme, secondary: e.target.value }))}
                    />
                    <div className="color__swatch" style={{ backgroundColor: theme.secondary }}></div>
                  </div>
                </label> */}
                <label className="color__field">
                  <span className="color__label">Secondary Color</span>
                  <input
                    type="color"
                    className="color__input"  
                    value={theme.secondary}
                    onChange={e => setTheme(theme => ({ ...theme, secondary: e.target.value }))}
                  />
                </label>
              </div>
            </div>

            <div className="font">
              <h2 className="font__title">Font</h2>
              <div className="font__options">
                <button
                  className="font__btn font__btn--serif"
                  data-active={font === "serif"}
                  onClick={() => setFont("serif")}
                >
                  <span className="font__preview">Aa</span>
                  <span className="font__label">Serif</span>
                </button>

                <button
                  className="font__btn font__btn--sans"
                  data-active={font === "sans"}
                  onClick={() => setFont("sans")}
                >
                  <span className="font__preview">Aa</span>
                  <span className="font__label">Sans</span>
                </button>

                <button
                  className="font__btn font__btn--mono"
                  data-active={font === "mono"}
                  onClick={() => setFont("mono")}
                >
                  <span className="font__preview">Aa</span>
                  <span className="font__label">Mono</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={`resume resume--${layout} resume--font-${font}`}>
        {personalInfo && (
          <div className="resume__section-personal">
            <h1 className="resume__name">{resume.personal.name}</h1>
            <div className="resume__contact">
              <div className="resume__contact-group">
                <i className="fa-solid fa-envelope"></i>
                <span className="resume__email">{resume.personal.email}</span>
              </div>
              <div className="resume__contact-group">
                <i className="fa-solid fa-phone"></i>
                <span className="resume__phone">{resume.personal.phone}</span>
              </div>
              <div className="resume__contact-group">
                <i className="fa-solid fa-location-dot"></i>
                <span className="resume__location">{resume.personal.location}</span>
              </div>
            </div>
          </div>
        )}

        <div className="resume__main">
          {educationItems.length > 0 && (
            <div className="resume__section-education">
              <h2 className="resume__education">Education</h2>

              {educationItems.map(edu => (
                <div key={edu.id} className="resume__education-info">
                  <div className="resume__education-info-group">
                    <p className="resume__education-dates">{edu.startDate} – {edu.endDate}</p>
                    <p className="resume__education-location">{edu.location}</p>
                  </div>

                  <div className="resume__education-info-group">
                    <p className="resume__education-school">{edu.school}</p>
                    <p className="resume__education-degree">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {experienceItems.length > 0 && (
            <div className="resume__section-experience">
              <h2 className="resume__experience">Professional Experience</h2>

              {experienceItems.map(exp => (
                <div key={exp.id} className="resume__experience-info">
                  <div className="resume__experience-info-group">
                    <p className="resume__experience-dates">{exp.startDate} – {exp.endDate}</p>
                    <p className="resume__experience-location">{exp.location}</p>
                  </div>

                  <div className="resume__experience-info-group">
                    <p className="resume__experience-company">{exp.company}</p>
                    <p className="resume__experience-position">{exp.position}</p>
                    <p className="resume__experience-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
