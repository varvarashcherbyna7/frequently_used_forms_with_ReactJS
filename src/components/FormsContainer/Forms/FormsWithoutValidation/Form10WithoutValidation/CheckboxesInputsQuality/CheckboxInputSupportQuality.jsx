import React from "react"
import "./CheckboxesInputsQuality_main.sass"

const CheckboxInputSupportQuality = (props) => {
    return (
        <div className='containerInputQuality'>
            <div className='containerTextInputQuality'>Support quality</div>
            <div className="inputQualityForm10">
                <input type="radio" id="SupportQuality-5" name="ratingSupportQuality" value="5"/>
                <label htmlFor="SupportQuality-5" title="Rating «5»"/>

                <input type="radio" id="SupportQuality-4" name="ratingSupportQuality" value="4"/>
                <label htmlFor="SupportQuality-4" title="Rating «4»"/>

                <input type="radio" id="SupportQuality-3" name="ratingSupportQuality" value="3"/>
                <label htmlFor="SupportQuality-3" title="Rating «3»"/>

                <input type="radio" id="SupportQuality-2" name="ratingSupportQuality" value="2"/>
                <label htmlFor="SupportQuality-2" title="Rating «2»"/>

                <input type="radio" id="SupportQuality-1" name="ratingSupportQuality" value="1"/>
                <label htmlFor="SupportQuality-1" title="Rating «1»"/>
            </div>
        </div>
    )
};
export default CheckboxInputSupportQuality;