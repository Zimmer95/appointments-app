import React, { useEffect, useState } from "react";
import ErrorPage from "../../components/errorPage/errorPage";
import { useNavigate } from "react-router-dom";

const ErrorPageView = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  useEffect(() => {
    setCountdown(5);
  }, []);

  return <ErrorPage onCountDown={countdown} />;
};

export default ErrorPageView;
