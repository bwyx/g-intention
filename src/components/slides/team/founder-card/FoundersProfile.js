import React from "react"
import Image from 'next/image';
import Link from 'next/link';
import IconEmail from "../../../../public/assets/social_icon/sms.svg";
import IconCall from "../../../../public/assets/social_icon/call-calling.svg";
import IconLinkdin from "../../../../public/assets/social_icon/LinkedIn.svg";

const LeftFounderCard = (props) => {
    console.log(props)
    return (
        <>
        <div className="left_founder_card">
            <div className="founder_profile">
            <div className="founder_img"><Image src={props.profile_image} layout="responsive"/></div>
            <div className="details">
                <div className="basic_info">
                    < span className = "founder_name" >{props.founder_name}</span>
                    <div className="divider"></div>
                    <span className="position_roll">{props.founder_position_roll}</span>
                </div>
                <div className="social_icon">
                    <Link href={props.email}><Image src={IconEmail} height={18}/></Link>
                    <Link href={props.call}><Image src={IconCall} height={18}/></Link>
                    <Link href={props.linkdin}><Image src={IconLinkdin} height={18}/></Link>
                </div>
            </div>
            </div>
            <div className="quotes">
                    <span>{props.quotes}</span>
            </div>
        </div>
        </>
     );
}



const RightFounderCard = (props) => {
    console.log(props)
    return (
        <>
        <div className="right_founder_card">
            <div className="quotes">
                    <span>{props.quotes}</span>
            </div>
            <div className="founder_profile">
            <div className="founder_img"><Image src={props.profile_image} layout="responsive"/></div>
            <div className="details">
                <div className="basic_info">
                    < span className="founder_name" >{props.founder_name}</span>
                    <div className="divider"></div>
                    <span className="position_roll">{props.founder_position_roll}</span>
                </div>
                <div className="social_icon">
                    <Link href={props.email}><Image src={IconEmail} height={18}/></Link>
                    <Link href={props.call}><Image src={IconCall} height={18}/></Link>
                    <Link href={props.linkdin}><Image src={IconLinkdin} height={18}/></Link>
                </div>
            </div>
            </div>
        </div>
        </>
     );
}

// Exports
export { LeftFounderCard, RightFounderCard };