import { useState } from "react";

export default function Form({ fields, endpoint, method = "POST" }) {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((field) => [field.name, ""]))
  );

  function handleChange(ev) {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    const res = await fetch(endpoint, {
      method: method.toUpperCase(),
      body: JSON.stringify(formData), // Always send data (even in DELETE if needed)
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert(`${method.toUpperCase()} request successful!`);
    } else {
      alert(`${method.toUpperCase()} request failed.`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
