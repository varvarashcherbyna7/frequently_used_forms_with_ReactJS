import React from "react"
import "./CheckboxesInputsQuality_main.sass"

const CheckboxInputServiceQuality = (props) => {
    return (
        <div className='containerInputQuality'>
            <div className='containerTextInputQuality'>Service quality</div>
            <div className="inputQualityForm10">
                <input type="radio" id="ServiceQuality-5" name="ratingServiceQuality" value="5"/>
                <label htmlFor="ServiceQuality-5" title="Rating «5»"/>

                <input type="radio" id="ServiceQuality-4" name="ratingServiceQuality" value="4"/>
                <label htmlFor="ServiceQuality-4" title="Rating «4»"/>

                <input type="radio" id="ServiceQuality-3" name="ratingServiceQuality" value="3"/>
                <label htmlFor="ServiceQuality-3" title="Rating «3»"/>

                <input type="radio" id="ServiceQuality-2" name="ratingServiceQuality" value="2"/>
                <label htmlFor="ServiceQuality-2" title="Rating «2»"/>

                <input type="radio" id="ServiceQuality-1" name="ratingServiceQuality" value="1"/>
                <label htmlFor="ServiceQuality-1" title="Rating «1»"/>
            </div>
        </div>
    )
};
export default CheckboxInputServiceQuality;