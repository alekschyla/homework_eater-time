import React from 'react';
import {connect} from 'react-redux';
import {changeEggActionCreator} from '../state/eggs'

import Egg from "./Egg";
import PaintedEgg from "./PaintedEgg";

const style = {
    width: '10vh',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const Eggs = (props) => {
    return (
        <div
            style={style}
            onClick={props._changeEgg}
        >
            {
                props._isPainted ?
                    <PaintedEgg/>
                    :
                    <Egg/>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    _isPainted: state.eggs.isPainted,
});

const mapDispatchToProps = dispatch => ({
    _changeEgg: () => dispatch(changeEggActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Eggs);