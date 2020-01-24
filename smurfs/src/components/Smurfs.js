import React, {useEffect} from 'react';
const Smurfs = ({ grabSmurfs, smurfs, isGrabbing}) => {
useEffect(() => {grabSmurfs();},[]);
if(isGrabbing){return <h3>Getting Smurfs</h3>}
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