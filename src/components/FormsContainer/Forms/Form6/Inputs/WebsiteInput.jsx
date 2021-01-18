import React from "react"
import "./Inputs6_main.sass"

const WebsiteInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">Website</div>
                    <div className="inputDivForm6 inputWebsiteDivForm6">
                        <i className="fas fa-globe"/>
                        <input type="url"
                               placeholder=""
                               name={props.name}
                               onChange={props.handleChange}
                               value={props.value}
                               onBlur={props.handleBlur}
                               className={props.errors.website && props.touched.website && "errorForm6"}
                        />
                        {props.errors.website && props.touched.website && (
                            <div className="inputFeedbackForm6 inputFeedbackWebsiteForm6">{props.errors.website}</div>
                        )}
                    </div>
                </div>
    )
};

export default WebsiteInput;