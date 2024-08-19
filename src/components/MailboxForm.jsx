import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMail(formData);
    setFormData({});
    navigate("/Mailbox");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Mailbox">Enter a BoxHolder:</label>
        <input
          type="text"
          id="Mailbox"
          name="Mailbox"
          value={formData.name}
          onChange={handleChange}
        />

        <label>
          Pick size:
          <select
            name="selectedSize"
            value={formData.selectedSize}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Please select a size
            </option>
            <option value="Small">Small</option>
            <option value="mid">mid</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;
