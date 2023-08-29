import React from "react";
import "./Homestyle.css";

export function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="homebanner">
          <p className="maintxt">Let Your Home Be Unique</p>
          <p className="subtxt">
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </p>
          <button className="buttonstyle">
            <div className="buttontxt">Get Started</div>
            <div className="buttonicon"></div>
          </button>
        </div>

        <div class="row" style={{ marginTop: "529px", height: "225px" }}>
          <div
            style={{ paddingLeft: "22px", paddingRight: "20px" }}
            class="col-4"
          >
            <p className="projecthead">Project Plan</p>
            <p className="projectbody">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div>
              <p className="readmstyle">Read More</p>
              <div className="arrystyle"></div>
            </div>
          </div>
          <div
            style={{ paddingLeft: "22px", paddingRight: "20px" }}
            class="col-4"
          >
            <p className="projecthead">Interior Work</p>
            <p className="projectbody">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div>
              <p className="readmstyle">Read More</p>
              <div className="arrystyle"></div>
            </div>
          </div>
          <div
            style={{ paddingLeft: "22px", paddingRight: "20px" }}
            class="col-4"
          >
            <p className="projecthead">Realization</p>
            <p className="projectbody">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div>
              <p className="readmstyle">Read More</p>
              <div className="arrystyle"></div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"deepskyblue"}}>  
          <div style={{width:"472px", height:"614px", backgroundColor:"ButtonText", marginTop:"43px",marginBottom:"43px",marginRight:"80px",display:"inline-block"}}></div>
          <div className="image2" style={{backgroundColor:"blue" , width:"653px", display:"inline-block"}} ></div>
        </div>
      </div>
    </div>
  );
}
