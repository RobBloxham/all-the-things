import React from 'react';

const KarensThings = (props) => {
    return ( 
        <>
            <h2>Karen's Things</h2>
            {props.KarensThings.map((thing, idx) => 
                <karenThing 
                    key={idx}
                    thing={thing}
                />
            )}
        </>
     );
}
 
export default KarensThings;