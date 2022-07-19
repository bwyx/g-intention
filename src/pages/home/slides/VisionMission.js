import Image from 'next/image';
import VisionSvg from "../../../public/assets/vision.svg";
import MissionSvg from "../../../public/assets/mission.svg";

const VisionMission = () => {
    return ( 
        <>
            <div className="vision_mission_container">
                <div className="container">
                    < div>
                        <div className="right">
                            <Image src={VisionSvg}/>
                            <span> The vision is to build a range of products & services that can leave a deep impact on lives. </span>
                        </div>
                    </div >
                    <div>
                        <div className="left">
                            <Image src={MissionSvg}/>
                            <span> The mission is to build and produce 100 revolutionary products & services by 2025. </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default VisionMission;