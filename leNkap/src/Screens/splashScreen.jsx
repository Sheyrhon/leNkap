import React, { useEffect } from "react";
// import '../../src/styles/styles.css'
import profile from "../../src/assets/profile.png";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("splash scren done");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="profile">
      <img
        src={profile}
        alt="myImage"
        style={{ width: 100, height: 100, justifyContent: "center" }}
      />

      <div className="row">
        <h2 className="profileName">Sheyrhon</h2>
        <p className="appName">Your Expense Tracker</p>
        <p>Loading.....</p>
      </div>
    </div>
  );
}
