import React, {useState} from 'react';
import { SlideHeaderWrapper, SlideHeader } from "../../../components/styled/SlideHeader";
import TeamCard from "../../../components/slides/team/team/TeamCard";
import HarishSisodiya from '../../../public/assets/harish_sisodiya.svg';
import AbhishekSingh from '../../../public/assets/abhishek_singh.svg';
import DropButton from "../../../components/slides/team/dropdown-menu/DropButton";
import TeamDataBase from "../../../database/team/TeamDataBase";


const Team = () => {
    const memberRoles = ["All", ...new Set(TeamDataBase.map(t=>t.position))]
    const [selectedPosition, setSelectedPosition] = useState("All")
    
    const filteredMember = TeamDataBase.filter(m => m.position === selectedPosition)

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
                <div className="container">
                    <SlideHeaderWrapper><SlideHeader>Team</SlideHeader></SlideHeaderWrapper>
                    <div className="team_categories_btn">
                        <DropButton
                            PositionValues={memberRoles}
                            FilterMenu={setSelectedPosition}
                            toggleActiveStyle={toggleActiveStyle}/>
                    </div>
                    <div className="teans_profile_container">
                        <TeamCard
                            TeamMembers={selectedPosition === "All" ? TeamDataBase : filteredMember} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Team;