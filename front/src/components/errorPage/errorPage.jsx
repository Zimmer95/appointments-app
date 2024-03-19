import "./errorPage.css";

const ErrorPage = ({ onCountDown }) => {
  return (
    <div className="errorPage">
      <div>
        <h1>¡Ha ocurrido un error!</h1>
        <h2>¡Aquí no hay nada!</h2>
        {/* Utiliza la interpolación para mostrar el tiempo restante */}
        <p>Redirigiendo en {onCountDown} segundos.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
