// Design + images
import "./SpanHospital.css";
import girl from "../../../imgs/girl.png";

// Components
import { useState } from "react";

// ////////////////////

const SpanHospital = () => {
  const [span, setSpan] = useState(false);
  const handleClick = () => {
    setSpan(true);
  };

  return (
    <div
      className={`span-hospital ${
        span ? "display-none" : ""
      }`}
    >
      <div className="span-header">
        <h2>Hello, name!</h2>
        <button onClick={handleClick}>
          <i className="fa-solid fa-x icon-spanclose"></i>
        </button>
      </div>
      <div className="span-body">
        <p>
          Find here important information about
          all the hospitals close to where you
          live.
        </p>

        <img
          src={girl}
          alt="girl"
          className="span-girl"
        />
      </div>
    </div>
  );
};

export default SpanHospital;
