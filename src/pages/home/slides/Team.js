import React, {useState} from 'react';
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
                <div className="container">
                    <section className="header">Header</section>
                    <div className="first_div">First Div</div>
                </div>
            </div>
        </>
     );
}
 
export default Team;