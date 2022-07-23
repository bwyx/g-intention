import React, {useState} from 'react';
import LeftFounderCard from "../../../components/slides/team/founder-card/LeftFounderCard";
import RightFounderCard from "../../../components/slides/team/founder-card/RightFounderCard";
import TeamCard from "../../../components/slides/team/team/TeamCard";
import HarishSisodiya from '../../../public/assets/harish_sisodiya.svg';
import AbhishekSingh from '../../../public/assets/abhishek_singh.svg';
import TeamMenuBarButton from "../../../components/slides/team/Button/TeamMenuBarButton";
import TeamDataBase from "../../../database/team/TeamDataBase";


const Team = () => {

    const allPositionValues = ["All", ...new Set(TeamDataBase.map((curElem) => curElem.position))];
    const [TeamMembers, setTeamMembers] = useState(TeamDataBase);
    const [PositionValues, setPositionValues] = useState(allPositionValues);
    
    const [appState, changeState] = useState({
        activeObject: null,
        TeamDataBase
    })

    const FilterMenu = (position, index) => {

        changeState({ ...appState, activeObject: appState.TeamDataBase[index] });

        if (position === "All") {
            setTeamMembers(TeamDataBase);
            return;
        }
        const updatedTeam = TeamDataBase.filter((curElem) => {
            return curElem.position === position;
        });

        setTeamMembers(updatedTeam);
    }

 // Toggle Activate
    function toggleActiveStyle(index) {
                if (appState.TeamDataBase[index] === appState.activeObject) {
                    return "team_menu_bar_button active";
                } else {
                    return "team_menu_bar_button inactive";
                }
     }


    return ( 
        <>
           
            <div className="slide_team">
                <div div className="container" >
                    <div className="slide_header"><span>Team</span></div>
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
                    <div className="team_members">
                        <div className="menu_bar">
                            <TeamMenuBarButton
                            toggleActiveStyle={toggleActiveStyle}
                            FilterMenu={FilterMenu}
                            PositionValues={PositionValues}
                            />
                        </div>
                        <div className="team_card_container">
                            <TeamCard TeamMembers={TeamMembers}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Team;