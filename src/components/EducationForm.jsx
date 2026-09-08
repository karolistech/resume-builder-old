import FormField from "./FormField.jsx";

export default function EducationForm(props) {
  const { education, updateEducation, saveEducation, cancelEducation, deleteEducation } = props;

  function handleInput(e) {
    const { field } = e.target.dataset;
    updateEducation({ ...education, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveEducation();
  }

  return (
    <form className="form education-form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <FormField
          id="school"
          label="School"
          type="text"
          dataField="school"
          value={education.school}
          handleInput={handleInput}
        />

        <FormField
          id="degree"
          label="Degree"
          type="text"
          dataField="degree"
          value={education.degree}
          handleInput={handleInput}
        />

        <div className="form__field-dates">
          <FormField
            id="start-date"
            label="Start Date"
            type="month"
            dataField="startDate"
            value={education.startDate}
            handleInput={handleInput}
          />

          <FormField
            id="end-date"
            label="End Date"
            type="month"
            dataField="endDate"
            value={education.endDate}
            handleInput={handleInput}
          />
        </div>

        <FormField
          id="location"
          label="Location"
          type="text"
          dataField="location"
          value={education.location}
          handleInput={handleInput}
        />
      </div>

      <div className="education-form__actions">
        {deleteEducation && (
          <button
            type="button"
            className="education-form__btn education-form__delete-btn"
            onClick={deleteEducation}
          >
            Delete
          </button>
        )}

        <button
          type="button"
          className="education-form__btn education-form__cancel-btn"
          onClick={cancelEducation}
        >
          Cancel
        </button>

        <button className="education-form__btn education-form__save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
