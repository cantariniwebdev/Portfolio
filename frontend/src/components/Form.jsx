import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5000/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("success");
        setFormData({
          name: "",
          email: "",
          tel: "",
          country: "",
          message: "",
        });
      } else {
        setMessage("error");
      }
    } catch (error) {
      setMessage("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(false), 3000);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          name="name"
          placeholder="Nómbre"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="on"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="on"
        />
      </div>
      <div className="row">
        <input
          type="tel"
          name="tel"
          placeholder="Teléfono"
          value={formData.tel}
          onChange={handleChange}
          required
          pattern="[0-9]+"
          autoComplete="on"
        />
        <input
          type="text"
          name="País"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          autoComplete="on"
        />
      </div>
      <div className="area">
        <textarea
          name="message"
          placeholder="Mensaje..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {message === "success" && (
        <div className="warning">
          <p>Mensaje enviado con éxito!</p>
        </div>
      )}
      {message === "error" && (
        <div className="warning">
          <p> Error al enviar el mensaje</p>
        </div>
      )}
    </form>
  );
};

export default Form;
