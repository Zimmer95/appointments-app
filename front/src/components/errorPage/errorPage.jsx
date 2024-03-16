import "./errorPage.css";

const ErrorPage = ({ onCountDown }) => {
  return (
    <div className="errorPage">
      <div>
        <h1>¡Ha ocurrido un error!</h1>
        <h2>¡Aqui no hay nada!</h2>
        <p>Redirigiendo en {onCountDown} segundos.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
