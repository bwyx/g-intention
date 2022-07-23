import React, {useState} from 'react';
import LeftFounderCard from "../../../components/slides/team/founder-card/LeftFounderCard";
import RightFounderCard from "../../../components/slides/team/founder-card/RightFounderCard";
import HarishSisodiya from '../../../public/assets/harish_sisodiya.svg';
import AbhishekSingh from '../../../public/assets/abhishek_singh.svg';
const Founder = () => {
    return ( 
        <>
            <div className="slide_founder">
                <div className="container">
                    <div className="slide_header"><span>Founder</span></div>
                    <div className="founder">
                        < LeftFounderCard
                            profile_image={HarishSisodiya}
                            founder_name="Harish Sisodiya"
                            founder_position_roll="CEO & FOUNDER"
                            quotes = "❝ He is the founder & CEO of g-intention having a passionate vision to build the next fortune and fan of futuristic thinking. ❞"
                            email="mailto:ceo@g-intention.com"
                            call="tel:+919782152921"
                            linkdin = "https://www.linkedin.com/in/harish-sisodiya-886a59183/"
                        />
                        < RightFounderCard
                            profile_image={AbhishekSingh}
                            founder_name="Abhishek Singh"
                            founder_position_roll="CTO & FOUNDER"
                            quotes = "❝ He is the founder & CTO of g-intention having a passionate vision to build the next fortune and fan of Tony Stark. ❞"
                            email="mailto:abhi@g-intention.com"
                            call="tel:+919648364322"
                            linkdin = "https://www.linkedin.com/in/iamaking/"
                        />
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Founder;