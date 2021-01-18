import React from "react"
import "./InputsFileTextarea_main.sass"

class InputsFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            title: 'Include some file',
        };
    }
    onHandleChange = (e) => {
        e.preventDefault();
        let files = e.target.files;
        this.setState({
            ...this.state,
            files: [...this.state.files, ...files],
            title: this.state.title === ''
        });
        e.target.value = null;
    };
    removeFile = (f) => {
        let newFiles = this.state.files.filter(file => file !== f);
        this.setState({
            ...this.state,
            files: newFiles,
        });
    };
    render() {
        const {files} = this.state.files;
        return (
            <div className="inputFileContainerForm2">
                <input
                    type="file"
                    name='file'
                    value={files}
                    onChange={this.onHandleChange}
                />
                <label htmlFor='inputFileForm2'>
                    <span>{this.state.title}</span>
                    {
                                this.state.files.map(x =>
                                    <div key={x.name} className="nameFileDivForm2">
                                        {x.name} <span id={x.name} className="closeForm2"
                                                       onClick={this.removeFile.bind(this, x)}/>
                                    </div>)
                    }
                </label>
            </div>
        )
    }
}
export default InputsFile;