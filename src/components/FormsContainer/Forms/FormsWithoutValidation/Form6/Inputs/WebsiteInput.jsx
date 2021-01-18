import React from "react"
import "./Inputs_main.sass"

const WebsiteInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">Website</div>
                    <div className="inputDivForm6 inputWebsiteDivForm6">
                        <i className="fas fa-globe"/>
                        <input type="url"
                               placeholder=""
                        />
                    </div>
                </div>
    )
};

export default WebsiteInput;