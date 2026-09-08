import FormField from "./FormField.jsx";

export default function ExperienceForm(props) {
  const { experience, saveExperience, updateExperience, deleteExperience, cancelExperience } = props;

  function handleInput(e) {
    const { field } = e.target.dataset;
    updateExperience({ ...experience, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveExperience();
  }
  
  return (
    <form className="form experience-form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <FormField
          id="company"
          label="Company"
          type="text"
          dataField="company"
          value={experience.company}
          handleInput={handleInput}
        />

        <FormField
          id="position"
          label="Position"
          type="text"
          dataField="position"
          value={experience.position}
          handleInput={handleInput}
        />

        <div className="form__field-dates">
          <FormField
            id="start-date"
            label="Start Date"
            type="month"
            dataField="startDate"
            value={experience.startDate}
            handleInput={handleInput}
          />

          <FormField
            id="end-date"
            label="End Date"
            type="month"
            dataField="endDate"
            value={experience.endDate}
            handleInput={handleInput}
          />
        </div>

        <FormField
          id="location"
          label="Location"
          type="month"
          dataField="location"
          value={experience.location}
          handleInput={handleInput}
        />

        <div className="form__field">
          <label htmlFor="description" className="form__field-label">
            <span>Description</span>
          </label>
          <textarea
            id="description"
            className="form__field-input"
            data-field="description"
            maxLength={150}
            value={experience.description}
            onChange={handleInput}
            >
          </textarea>
        </div>
      </div>
      
      <div className="experience-form__actions">
        {deleteExperience && (
          <button
            type="button"
            className="experience-form__btn experience-form__delete-btn"
            onClick={deleteExperience}
          >
            Delete
          </button>
        )}

        <button
          type="button"
          className="experience-form__btn experience-form__cancel-btn"
          onClick={cancelExperience}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="experience-form__btn experience-form__save-btn"
        >
          Save
        </button>
      </div>
    </form>
  );
}
