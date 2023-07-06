import React, { useEffect, useState } from "react";
import styles from './index.module.css';

export default function Index() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [time]);


  return (
    <>
      <div className={styles.timer}>
        <p style={{ color: "violet" }}>Time:</p>
        <span>{time}</span>
      </div>

      <style jsx>{`
      p {
        font-weight: bold;
      }

      span {
        color: red;
      }
      `}</style>
    </>
  );
};