import React from "react"
import "./InputsRandomer_main.sass"
import RandomKey from "./Randomer/RandomKey"
import ArrowsImgForRandomKey from "./Randomer/ArrowsImgForRandomKey"

let initialRandomValue = "";
let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let max_position = words.length - 1;
let position;
for (let i = 0; i < 5; ++i) {
    position = Math.floor(Math.random() * max_position);
    initialRandomValue = initialRandomValue + words.substring(position, position + 1);
}

class Randomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            result: ''
        }
    }
    handleClick = () => {
        this.setState({loading: true});
        setTimeout(() => {
            let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            let max_position = words.length - 1;
            let position;
            let res = '';
            for (let i = 0; i < 5; ++i) {
                position = Math.floor(Math.random() * max_position);
                res = res + words.substring(position, position + 1);
            }
            this.setState({loading: false, result: res});
        }, 1800)
    };

    render() {
        const {loading} = this.state;
        return (
            <div className="keyInputDiv">
                <RandomKey value={this.state.result || initialRandomValue}/>
                <ArrowsImgForRandomKey
                    type="button"
                    onClick={this.handleClick}
                    disabled={loading}
                />
            </div>
        );
    }
}

export default Randomer;