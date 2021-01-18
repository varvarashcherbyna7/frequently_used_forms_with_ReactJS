import React from "react"
import "./FormsContainer_main.sass"
import line_red from "../../img/line_red.png"
import {NavLink, Route} from "react-router-dom"
import ModalForm1 from "./Forms/ModalWindowForms/ModalForm1"
import ModalForm2 from "./Forms/ModalWindowForms/ModalForm2"
import ModalForm3 from "./Forms/ModalWindowForms/ModalForm3"
import ModalForm4 from "./Forms/ModalWindowForms/ModalForm4"
import ModalForm5 from "./Forms/ModalWindowForms/ModalForm5"
import ModalForm6 from "./Forms/ModalWindowForms/ModalForm6"
import ModalForm7 from "./Forms/ModalWindowForms/ModalForm7"
import ModalForm8 from "./Forms/ModalWindowForms/ModalForm8"
import ModalForm9 from "./Forms/ModalWindowForms/ModalForm9"
import ModalForm10 from "./Forms/ModalWindowForms/ModalForm10"
import Form1 from "./Forms/Form1/Form1"
import Form2 from "./Forms/Form2/Form2"
import Form3 from "./Forms/Form3/Form3"
import Form4 from "./Forms/Form4/Form4"
import Form5 from "./Forms/Form5/Form5"
import FormComment from "./Forms/Form6/FormComment"
import Form7 from "./Forms/Form7/Form7"
import Form8 from "./Forms/Form8/Form8"
import Form9 from "./Forms/Form9/Form9"
import Form10 from "./Forms/Form10/Form10"
import ModalForm10WithoutValidation
    from "./Forms/FormsWithoutValidation/Form10WithoutValidation/ModalForm10WithoutValidation"
import ModalForm1WithoutValidation
    from "./Forms/FormsWithoutValidation/Form1WithoutValidation/ModalForm1ModalForm1WithoutValidation"
import ModalForm2WithoutValidation from "./Forms/FormsWithoutValidation/Form2/ModalForm2WithoutValidation"
import ModalForm3WithoutValidation from "./Forms/FormsWithoutValidation/Form3/ModalForm3WithoutValidation"
import ModalForm4WithoutValidation from "./Forms/FormsWithoutValidation/Form4/ModalForm4WithoutValidation"
import ModalForm5WithoutValidation from "./Forms/FormsWithoutValidation/Form5/ModalForm5WithoutValidation"
import ModalForm6WithoutValidation from "./Forms/FormsWithoutValidation/Form6/ModalForm6WithoutValidation"
import ModalForm7WithoutValidation from "./Forms/FormsWithoutValidation/Form7/ModalForm7WithoutValidation"
import ModalForm8WithoutValidation from "./Forms/FormsWithoutValidation/Form8/ModalForm8WithoutValidation"
import ModalForm9WithoutValidation from "./Forms/FormsWithoutValidation/Form9/ModalForm9WithoutValidation"

class FormsContainer extends React.Component {
    render() {
        return (
            <div className='formsContainer'>
                <a name="with_validation_modal"/>
                <h2>Forms with validation and with modal</h2>
                <div className='lineBlock'><img src={line_red} alt="line"/></div>
                <div className='formsDiv'>
                    <div className='blockForms'>
                        <NavLink to='/form1'>
                            <div className='formLink'>Login</div>
                        </NavLink>
                        <NavLink to='/form2'>
                            <div className='formLink'>Order services</div>
                        </NavLink>
                        <NavLink to='/form3'>
                            <div className='formLink'>Registration</div>
                        </NavLink>
                        <NavLink to='/form4'>
                            <div className='formLink'>Contacts</div>
                        </NavLink>
                    </div>
                    <div className='blockForms'>
                        <NavLink to='/form5'>
                            <div className='formLink'>Easy Contact</div>
                        </NavLink>
                        <NavLink to='/form6'>
                            <div className='formLink'>Comment</div>
                        </NavLink>
                        <NavLink to='/form7'>
                            <div className='formLink'>Checkout</div>
                        </NavLink>
                        <NavLink to='/form8'>
                            <div className='formLink'>Booking</div>
                        </NavLink>
                    </div>
                    <div className='blockForms'>
                        <NavLink to='/form9'>
                            <div className='formLink'>Checkout - 2</div>
                        </NavLink>
                        <NavLink to='/form10'>
                            <div className='formLink'>Feedback</div>
                        </NavLink>
                    </div>
                </div>
                <Route path='/form1' render={() => (<ModalForm1/>)}/>
                <Route path='/form2' render={() => (<ModalForm2/>)}/>
                <Route path='/form3' render={() => (<ModalForm3/>)}/>
                <Route path='/form4' render={() => (<ModalForm4/>)}/>
                <Route path='/form5' render={() => (<ModalForm5/>)}/>
                <Route path='/form6' render={() => (<ModalForm6/>)}/>
                <Route path='/form7' render={() => (<ModalForm7/>)}/>
                <Route path='/form8' render={() => (<ModalForm8/>)}/>
                <Route path='/form9' render={() => (<ModalForm9/>)}/>
                <Route path='/form10' render={() => (<ModalForm10/>)}/>

                <a name="with_validation_without_modal"/>
                <h2>Forms with validation and without modal</h2>
                <div className='lineBlock'><img src={line_red} alt="line"/></div>
                <div className='formsDiv'>
                    <div className='blockForms'>
                        <NavLink to='/form1_1'>
                            <div className='formLink'>Login</div>
                        </NavLink>
                        <NavLink to='/form2_2'>
                            <div className='formLink'>Order services</div>
                        </NavLink>
                        <NavLink to='/form3_3'>
                            <div className='formLink'>Registration</div>
                        </NavLink>
                        <NavLink to='/form4_4'>
                            <div className='formLink'>Contacts</div>
                        </NavLink>
                    </div>
                    <div className='blockForms'>
                        <NavLink to='/form5_5'>
                            <div className='formLink'>Easy Contact</div>
                        </NavLink>
                        <NavLink to='/form6_6'>
                            <div className='formLink'>Comment</div>
                        </NavLink>
                        <NavLink to='/form7_7'>
                            <div className='formLink'>Checkout</div>
                        </NavLink>
                        <NavLink to='/form8_8'>
                            <div className='formLink'>Booking</div>
                        </NavLink>
                    </div>
                    <div className='blockForms'>
                        <NavLink to='/form9_9'>
                            <div className='formLink'>Checkout - 2</div>
                        </NavLink>
                        <NavLink to='/form10_10'>
                            <div className='formLink'>Feedback</div>
                        </NavLink>
                    </div>
                </div>
                <div className="formsContainerWithoutModal">
                    <Route path='/form1_1' render={() => (<Form1/>)}/>
                    <Route path='/form2_2' render={() => (<Form2/>)}/>
                    <Route path='/form3_3' render={() => (<Form3/>)}/>
                    <Route path='/form4_4' render={() => (<Form4/>)}/>
                    <Route path='/form5_5' render={() => (<Form5/>)}/>
                    <Route path='/form6_6' render={() => (<FormComment/>)}/>
                    <Route path='/form7_7' render={() => (<Form7/>)}/>
                    <Route path='/form8_8' render={() => (<Form8/>)}/>
                    <Route path='/form9_9' render={() => (<Form9/>)}/>
                    <Route path='/form10_10' render={() => (<Form10/>)}/>
                </div>

                {/*<a name="without_validation_with_modal"/>*/}
                {/*<h2>Forms without validation and with modal</h2>*/}
                {/*<div className='lineBlock'><img src={line_red} alt="line"/></div>*/}
                {/*<div className='formsDiv'>*/}
                {/*    <div className='blockForms'>*/}
                {/*        <NavLink to='/form1_1_without_validation'>*/}
                {/*            <div className='formLink'>Login</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form2_2_without_validation'>*/}
                {/*            <div className='formLink'>Order services</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form3_3_without_validation'>*/}
                {/*            <div className='formLink'>Registration</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form4_4_without_validation'>*/}
                {/*            <div className='formLink'>Contacts</div>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*    <div className='blockForms'>*/}
                {/*        <NavLink to='/form5_5_without_validation'>*/}
                {/*            <div className='formLink'>Easy Contact</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form6_6_without_validation'>*/}
                {/*            <div className='formLink'>Comment</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form7_7_without_validation'>*/}
                {/*            <div className='formLink'>Checkout</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form8_8_without_validation'>*/}
                {/*            <div className='formLink'>Booking</div>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*    <div className='blockForms'>*/}
                {/*        <NavLink to='/form9_9_without_validation'>*/}
                {/*            <div className='formLink'>Checkout - 2</div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink to='/form10_10_without_validation'>*/}
                {/*            <div className='formLink'>Feedback</div>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="formsContainerWithoutModal">*/}
                {/*    <Route path='/form1_1_without_validation' render={() => (<ModalForm1WithoutValidation/>)}/>*/}
                {/*    <Route path='/form2_2_without_validation' render={() => (<ModalForm2WithoutValidation/>)}/>*/}
                {/*    <Route path='/form3_3_without_validation' render={() => (<ModalForm3WithoutValidation/>)}/>*/}
                {/*    <Route path='/form4_4_without_validation' render={() => (<ModalForm4WithoutValidation/>)}/>*/}
                {/*    <Route path='/form5_5_without_validation' render={() => (<ModalForm5WithoutValidation/>)}/>*/}
                {/*    <Route path='/form6_6_without_validation' render={() => (<ModalForm6WithoutValidation/>)}/>*/}
                {/*    <Route path='/form7_7_without_validation' render={() => (<ModalForm7WithoutValidation/>)}/>*/}
                {/*    <Route path='/form8_8_without_validation' render={() => (<ModalForm8WithoutValidation/>)}/>*/}
                {/*    <Route path='/form9_9_without_validation' render={() => (<ModalForm9WithoutValidation/>)}/>*/}
                {/*    <Route path='/form10_10_without_validation' render={() => (<ModalForm10WithoutValidation/>)}/>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default FormsContainer;