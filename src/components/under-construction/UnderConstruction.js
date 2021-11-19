import React from 'react';
import Image from 'next/image';
import illustration from '../../public/assets/illustration/working.svg'

const UnderConstruction = () => {
    return (
        <>
            <div className="under-construction-main-body">
                <div className="under-construction-container">
                    <div>
                        <div>
                            <h1>I'm the best!</h1>
                            <h6>
                            </h6>
                            <button>Explore product</button>
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