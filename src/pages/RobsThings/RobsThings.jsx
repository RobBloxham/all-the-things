import React from 'react';
import RobThing from '../../components/RobThing/RobThing'

const RobsThings = (props) => {
  return ( 
    <>
      <h1>Rob's Things</h1>
      {props.robsThings.map((thing, idx) => 
        <RobThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default RobsThings;