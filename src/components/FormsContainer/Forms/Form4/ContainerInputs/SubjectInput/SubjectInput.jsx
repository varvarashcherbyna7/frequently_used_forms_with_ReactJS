import React from "react"
import "./SubjectInput_main.sass"

const SubjectInput = (props) => {
    return (
        <div className="subjectInputDivForm4">
            <i className="fas fa-pencil-ruler"/>
            <div className="subjectDivForm4">
                <div className="inputTextForm4">Subject</div>
                <div className="inputDivForm4">
                    <input type="text"
                           name="subject"
                           onChange={props.handleChange}
                           value={props.values}
                    />
                </div>
            </div>
        </div>
    )
};

export default SubjectInput;