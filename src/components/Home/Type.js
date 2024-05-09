import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Aspiring Developer",
                    "Teacher",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;