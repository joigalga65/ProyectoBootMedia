import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Crear Cuenta</h3>

        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="email@example.com" />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Crea una contraseña"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <div className="input-group">
            <input
              type={showPassword2 ? "text" : "password"}
              className="form-control"
              placeholder="Repite la contraseña"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Botón */}
        <button className="btn btn-success w-100 mb-3">Registrarse</button>

        {/* Enlace a Login */}
        <div className="text-center">
          <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
