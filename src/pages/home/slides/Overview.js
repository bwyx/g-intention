
import Image from 'next/image';
import Logo from "../../../public/assets/logo.svg";
import TeamWork from "../../../public/assets/teamwork.svg"


const Overview = () => {
    return ( 
        <>
            <div div className="slide_overview">
                <Image src={TeamWork} />
                <div className="container">
                    <div ><Image src={Logo} height={120} /></div>
                    <div ><span>The vision is to build a range of products & services that can leave a deep impact on lives.</span></div>
                </div>
             </div>
        </>
     );
}
 
export default Overview;