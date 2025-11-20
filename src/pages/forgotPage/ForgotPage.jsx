import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgotPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Restablecer contraseña</h3>

        <p className="text-muted text-center" style={{ fontSize: "14px" }}>
          Ingresa tu correo y te enviaremos un enlace para recuperar tu cuenta.
        </p>

        {/* Input del correo */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Botón */}
        <button className="btn btn-primary w-100 mb-3">
          Enviar enlace
        </button>

        {/* Volver */}
        <div className="text-center">
          <Link to="/">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
