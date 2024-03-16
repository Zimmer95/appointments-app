import { useEffect, useState } from "react";
import ErrorPage from "../../components/errorPage/errorPage";
import { useNavigate } from "react-router-dom";

export default () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeDown = setTimeout(() => {
      setCountdown((countdown) => countdown - 1);
      if (countdown === 1) navigate("/");
    }, 1000);
    return () => clearTimeout(timeDown);
  }, [countdown]);

  useEffect(
    () => () => {
      setCountdown(5);
    },
    []
  );

  return (
    <>
      <ErrorPage onCountDown={countdown} />
    </>
  );
};
