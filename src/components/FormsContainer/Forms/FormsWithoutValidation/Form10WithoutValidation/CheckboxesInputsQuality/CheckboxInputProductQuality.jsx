import React from "react"
import "./CheckboxesInputsQuality_main.sass"

const CheckboxInputProductQuality = (props) => {
    return (
        <div className='containerInputQuality'>
            <div className='containerTextInputQuality'>Product quality</div>
            <div className="inputQualityForm10">
                <input type="radio" id="ProductQuality-5" name="ratingProductQuality" value="5"/>
                <label htmlFor="ProductQuality-5" title="Rating «5»"/>

                <input type="radio" id="ProductQuality-4" name="ratingProductQuality" value="4"/>
                <label htmlFor="ProductQuality-4" title="Rating «4»"/>

                <input type="radio" id="ProductQuality-3" name="ratingProductQuality" value="3"/>
                <label htmlFor="ProductQuality-3" title="Rating «3»"/>

                <input type="radio" id="ProductQuality-2" name="ratingProductQuality" value="2"/>
                <label htmlFor="ProductQuality-2" title="Rating «2»"/>

                <input type="radio" id="ProductQuality-1" name="ratingProductQuality" value="1"/>
                <label htmlFor="ProductQuality-1" title="Rating «1»"/>
            </div>
        </div>
    )
};
export default CheckboxInputProductQuality;