import React from 'react';
import paintedEgg from "../images/egg-painted..svg";


const PaintedEgg = () => {
    return (
        <div>
            <img
                style={{
                    width: '50vh'
                }}
                alt={'Painted egg'}
                src={paintedEgg}
            />
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontFamily: 'Open Sans Condensed',
                }}
            >
                Wesołych świąt!
            </div>
        </div>
    );
};

export default PaintedEgg;