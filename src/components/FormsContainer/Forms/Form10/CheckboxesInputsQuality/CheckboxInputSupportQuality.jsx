import React from "react"
import "./CheckboxesInputsQuality_main.sass"

const items = [
    {type:"radio", id: "SupportQuality-5", value: "5", htmlFor: "SupportQuality-5", title: "Rating «5»"},
    {type:"radio", id: "SupportQuality-4", value: "4", htmlFor: "SupportQuality-4", title: "Rating «4»"},
    {type:"radio", id: "SupportQuality-3", value: "3", htmlFor: "SupportQuality-3", title: "Rating «3»"},
    {type:"radio", id: "SupportQuality-2", value: "2", htmlFor: "SupportQuality-2", title: "Rating «2»"},
    {type:"radio", id: "SupportQuality-1", value: "1", htmlFor: "SupportQuality-1", title: "Rating «1»"}
];

class CheckboxInputSupportQuality extends React.Component {
    handleChangeSelectInput = e => {
        const v = e.target.value;
        this.setState({v});
        this.props.onChange(v);
    };
    render() {
        return (
            <div className='containerInputQuality'>
                <div className='containerTextInputQuality'>Support quality</div>
                <div className="inputQualityForm10">
                    {items.map((item) => (
                        <>
                            <input type={item.type}
                                   id={item.id}
                                   value={'Rating ' + item.value}
                                   name={this.props.name}
                                   onChange={this.handleChangeSelectInput}
                                   onBlur={this.props.handleBlur}
                            />
                            <label htmlFor={item.htmlFor} title={item.title}/>
                        </>
                    ))}
                </div>
            </div>
        )
    }
}
export default CheckboxInputSupportQuality;