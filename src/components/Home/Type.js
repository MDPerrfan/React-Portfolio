import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import Preloader from "../Pre";

function Type() {
    const {loading,portfolioData}=useSelector((state)=>state.root)
    if (loading || !portfolioData) {
      return <Preloader/>; 
    }
    const {intros} = portfolioData;
    const {animationText}=intros[0]
    return ( <
        Typewriter options = {
            {
                strings: animationText,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;