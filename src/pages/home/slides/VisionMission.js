import Image from 'next/image';
import VisionSvg from "../../../public/assets/vision.svg";
import MissionSvg from "../../../public/assets/mission.svg";
import { SlideHeaderWrapper, SlideHeader } from "../../../components/styled/SlideHeader";

const VisionMission = () => {
    return ( 
        <>
            <div className="vision_mission_container">
                <div className="parent_container">
                    <SlideHeaderWrapper><SlideHeader>Vision & Mission</SlideHeader></SlideHeaderWrapper>
                    <div div className="first_child_container" >
                        <div><div className="svg_vision_mission"><Image src={VisionSvg} layout="responsive"/></div></div>
                        <div><span>The vision is to build a range of products & services that can leave a deep impact on lives.</span></div>
                    </div>
                    <div className="second_child_container">
                        <div><div className="svg_vision_mission"><Image src={MissionSvg} layout="responsive"/></div></div>
                        <div><span>The mission is to build and produce 100 revolutionary products & services by 2025.</span></div>                        
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default VisionMission;