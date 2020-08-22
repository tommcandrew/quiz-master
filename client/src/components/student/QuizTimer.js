import React, { useState, useEffect } from "react";

const Timer = ({ seconds, setTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  console.log("TIMER");
  useEffect(() => {
    console.log(timeLeft);
  }, [timeLeft]);

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  useEffect(() => {
    if (!timeLeft) {
      console.log("TIME IS FALSY SO SETTING TIME UP TO TRUE");
      setTimeUp(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft, setTimeUp]);

  return <div>Time left: {fmtMSS(timeLeft)}</div>;
};

export default Timer;
