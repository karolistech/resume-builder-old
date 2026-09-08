// import "../styles/FormField.css";
import "@/styles/FormField.css";

export default function FormField(props) {
  const { id, label, type, dataField, value, handleInput } = props;

  return (
    <div className="form__field">
      <label htmlFor={id} className="form__field-label">
        <span>{label}</span>
      </label>
      <input
        id={id}
        className="form__field-input"
        type={type}
        maxLength={40}
        data-field={dataField}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}
