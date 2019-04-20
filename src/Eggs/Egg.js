import React from 'react';
import egg from "../images/egg.svg";

const Egg = () => {
    return (
        <div>
            <img
                style={{
                    width: '50vh'
                }}
                alt={'Egg'}
                src={egg}
            />
            <div
            style={{
                textAlign: 'center',
                fontSize: '24px',
                fontFamily: 'Open Sans Condensed',
            }}
            >
                Kliknij by pomalować jajko
            </div>
        </div>
    );
};

export default Egg;