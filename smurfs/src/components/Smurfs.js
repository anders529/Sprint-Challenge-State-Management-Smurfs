import React, {useEffect} from 'react';
const Smurfs = ({getSmurfs, smurfs, isGrabbing}) => {
    console.log(smurfs);
    useEffect(()=> {
        getSmurfs();
        },[]);
        if(isGrabbing) {return <h3>Finding A Smurf</h3>};
            return (
                <div>{smurfs.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                            <div>
                                <h3>Age: {item.age}</h3>
                                <h3>Height: {item.height}</h3>
                            </div>
                        </div>
                 </div>
             )})}
                </div>
)};
export default Smurfs;