import React from "react";
import "./Background.css";

function Background() {
  return (
    <div className="home__container">
      {/* ---image slider start--- */}
      <div className="slider">
        <div className="slides">
          {/* radio button start */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* ---radio button end--- */}
          {/* ---slide image start--- */}
          <div className="slide first">
            <img className="home__image" src="/1.png" alt="amazon logo" />
          </div>
          <div className="slide">
            <img className="home__image" src="/2.png" alt="" />
          </div>
          <div className="slide">
            <img className="home__image" src="/3.png" alt="" />
          </div>
          <div className="slide">
            <img className="home__image" src="/4.jpg" alt="" />
          </div>
          {/* ---slide image end--- */}

          {/* ---automatic navigation start--- */}
          <div className="navigation_auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          {/* ---automatic navigation end--- */}
        </div>
        {/* ---manual navigation start--- */}
        <div className="navigation_manual">
          <label for="radio1" className="manual-btn"></label>
          <label for="radio2" className="manual-btn"></label>
          <label for="radio3" className="manual-btn"></label>
          <label for="radio4" className="manual-btn"></label>
        </div>
        {/* ---manual navigation end--- */}
      </div>
      {/* ---image slider end--- */}
    </div>
  );
}
// var counter = 1;
// setInterval(function () {
//   document.getElementById("radio" + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 12000);
export default Background;
