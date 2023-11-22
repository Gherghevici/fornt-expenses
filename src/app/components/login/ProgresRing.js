"use client";
import { useState,useRef} from "react";
const ProgresRing = () => {
    const [r,setR] = useState(90);
    const [c,setC] = useState(Math.PI*(r*2));
    const [val,setVal] = useState(90);
    const [strokeOffSett,setStrokeOffSett] = useState((100-val)/100*c);

    
    return (
    
    <div className="relative w-max">
        <svg className="svg" width="250" height="250"  >
      <circle
        r="90"
        cx="125"
        cy="125"
        fill="transparent"
        strokeDasharray="565.48"
        strokeDashoffset="0"
      ></circle>
      <circle
        className="circle-bar"
        r="90"
        cx="125"
        cy="125"
        fill="transparent"
        strokeDasharray="565.48"
        strokeDashoffset="0"
        style={{strokeDashoffset:`${strokeOffSett}`}}
      ></circle>
      <circle
        className="dot-circle"
        r="4"
        cx="125"
        cy="35"
        strokeDashoffset="0"
      ></circle>
    </svg>
    <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
     <span>123.123</span>  <span>Spent</span>
    </div>
    
    </div>
    
  );
};

export default ProgresRing;
