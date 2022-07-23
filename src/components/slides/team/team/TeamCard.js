import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IMG from "../../../../public/assets/harish_sisodiya.svg";
import IconEmail from "../../../../public/assets/social_icon/sms.svg";
import IconCall from "../../../../public/assets/social_icon/call-calling.svg";
import IconLinkdin from "../../../../public/assets/social_icon/LinkedIn.svg";

const TeamCard = ({TeamMembers}) => {

    return (
        
        TeamMembers.map((elem) => {
        const { image, name, position, email_id, phone_number, linkdin } = elem;
            return ( 
                    <>
                        <div className="teams_card">
                        <Image src={IMG} height={145} />
                            <div className="details">
                                <div className="team_name_job_roll">
                                <span className="name">{name}</span>
                                    <div className="divider"></div>
                                <span className="job_roll">{position}</span>
                                </div>
                                <div className="social_icon">
                                    <Link href={email_id}><Image src={IconEmail} height={14}/></Link>
                                    <Link href={phone_number}><Image src={IconCall} height={14}/></Link>
                                    <Link href={linkdin}><Image src={IconLinkdin} height={14}/></Link>
                                </div>
                            </div>
                        </div>
                    </>
                );
        })
        
    )
   
   
    
}
 
export default TeamCard;