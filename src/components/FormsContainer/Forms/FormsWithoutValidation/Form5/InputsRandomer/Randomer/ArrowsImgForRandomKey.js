import React, {useState} from "react"
import "../InputsRandomer_main.sass"
import {useSpring, animated} from "react-spring"

const ArrowsImgForRandomKey = (props) => {
    const [flipped, set] = useState(false);
    const {color, transition, transform} = useSpring({
        color: 'black',
        transition: 'transform 0.7s linear',
        transform: flipped ? 'rotate(360deg)' : 'rotate(0deg)'
    });

    return (
        <div className="arrowsImgDiv" onClick={props.onClick}>
            <button
                type="button"
                // name={props.name}
                onClick={()  => set(!flipped)}
                // disabled={props.disabled}
                // onChange={props.onChange}
                className="btnForArrows"
            >

                {props.disabled
                    ? <animated.i className="fas fa-spinner" style={{
                        color,
                        transition,
                        transform: transform.interpolate(t => `${t} rotateX(0deg)`)
                    }}/>
                    : <i className="fas fa-sync-alt"/>}
            </button>
        </div>
    )
};

export default ArrowsImgForRandomKey;