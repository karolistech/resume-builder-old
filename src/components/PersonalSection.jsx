import FormField from "./FormField.jsx";

export default function PersonalSection(props) {
  const { personal, setPersonal } = props;

  function handleInput(e) {
    const { field } = e.target.dataset;
    setPersonal({ ...personal, [field]: e.target.value });
  }

  return (
    <form className="form">
      <h2 className="personal-section__title">
        <i className="fa-solid fa-user"></i>
        <span>Personal Details</span>
      </h2>
      <div className="form__fields">
        <FormField
          id="name"
          label="Full Name"
          type="text"
          dataField="name"
          value={personal.name}
          handleInput={handleInput}
        />

        <FormField
          id="email"
          label="Email"
          type="email"
          dataField="email"
          value={personal.email}
          handleInput={handleInput}
        />

        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          dataField="phone"
          value={personal.phone}
          handleInput={handleInput}
        />

        <FormField
          id="location"
          label="Location"
          type="text"
          dataField="location"
          value={personal.location}
          handleInput={handleInput}
        />
      </div>
    </form>
  );
}
