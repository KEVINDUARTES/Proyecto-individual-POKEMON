import React from "react";
import { Link } from "react-router-dom";
import style from "./landingpage.module.css";

export const LandingPage = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>
          <span>Find</span> all your <br />
          favorite <br />
          <span>Pokemon</span>
        </h1>
        <p>
          You can know the type of Pokemon, <br />
          its strengths, disadvantages and <br />
          abilities.
        </p>
        <Link to="/home">
          <button type="submit" value="See Pokemon" className={style.myButton} />
        </Link>

  
      </div>

      <div>jpg
        <img src="https://i.pinimg.com/originals/a4/86/bc/a486bc6092d979b69954c52b943799ff.png" alt="" />
      </div>
    </div>
  );
};
