import React, {useState} from 'react';
import {LeftFounderCard, RightFounderCard} from "../../../components/slides/team/founder-card/FoundersProfile";
import HarishSisodiya from '../../../public/assets/harish_sisodiya.svg';
import AbhishekSingh from '../../../public/assets/abhishek_singh.svg';
import { SlideHeaderWrapper, SlideHeader } from "../../../components/styled/SlideHeader";


const Founder = () => {
    return ( 
        <>
            <div className="slide_founder">
                <div className="container">
                    <SlideHeaderWrapper><SlideHeader>Founder</SlideHeader></SlideHeaderWrapper>
                    <div className="first_container">
                        <LeftFounderCard
                            profile_image={HarishSisodiya}
                            founder_name="Harish Sisodiya"
                            founder_position_roll="Founder & CEO"
                            email="mailto:ceo@g-intention.com"
                            call="tel:+919782152921"
                            linkdin="https://www.linkedin.com/in/harish-sisodiya-886a59183/"
                            quotes="❝ He is the founder & CEO of g-intention having a passionate vision to build the next fortune and fan of futuristic thinking.❞"
                            />
                    </div>
                    <div className="second_container">
                        <RightFounderCard
                            profile_image={AbhishekSingh}
                            founder_name="Abhishek Singh"
                            founder_position_roll="Founder & CTO"
                            email="mailto:abhi@g-intention.com"
                            call="tel:+919648364322"
                            linkdin="https://www.linkedin.com/in/iamaking/"
                            quotes="❝ He is the founder & CEO of g-intention having a passionate vision to build the next fortune and fan of futuristic thinking.❞"
                            />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Founder;