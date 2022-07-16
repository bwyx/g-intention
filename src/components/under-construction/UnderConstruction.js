import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import illustration from '../../public/assets/illustration/working.svg'

const UnderConstruction = () => {
    return (
        <>
            <div className="under-construction-main-body">
                <div className="under-construction-container">
                    <div>
                        <div className="coming-soon-container">
                            <h1>Coming Soon</h1>
                            <h6>It's time to work..
                                Until take a breath and explore our products.</h6>
                     <Link href="https://gogomet.com/">
                        <button>Explore products<span className="material-icons-round">apps</span></button>
                    </Link>
                            
                        </div>
                    </div>
                    <div>
                        <Image alt="illustration" src={illustration}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UnderConstruction; // export