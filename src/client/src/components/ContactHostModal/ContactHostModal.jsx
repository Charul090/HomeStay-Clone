import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal,Button} from 'react-bootstrap'
import styles from './ContactHostModal.module.css'

export class ContactHostModal extends Component {
        constructor(props){
            super(props)
            this.state={
                show : false
            }
        }

        handleShow = ()=>{
            this.setState({
                show:true
            })
        }

        handleClose = ()=>{
            this.setState({
                    show:false
            })
        }

    render() {
        return (
            <>


            <Button variant="success" onClick={this.handleShow}>
                <span className="font-weight-bold">Contact Host</span>
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose} animation={false} >
                
                    <div className={styles.modalHead} closeButton>CONTACT HOST
                    <span className="float-right font-weight-large" onClick={this.handleClose}>X</span>
                    </div>
                
                <Modal.Body style={{background:"rgba(183, 177, 174, 0.3)"}}>
                    
                <div class="row mod">
                    <div class="col">
                    <div className={styles.check}>
                        <p className="font-weight-bold">CHECK IN</p>
                        <p className="small">Friday</p>
                        <p className="small">31 July 2020</p>
                    </div>
                    </div>
                    <div class="col-6">
                        <div className={styles.check}>
                        <p className="font-weight-bold">CHECK OUT</p>
                        <p className="small">Friday</p>
                        <p className="small">31 July 2020</p>
                        </div>
                    </div>
                    <div class="col">
                    <div className={styles.check}>
                        <p className="font-weight-bold"><span className={styles.spanLabel}>1 NIGHT</span></p>
                        <p className="small">1 Guest</p>
                        <p className="small">1 Bed Room</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={styles.textColor}><i class='far fa-comment-dots' style={{fontSize:"50px",border:"1px",color:"#CA005D",padding:"5px"}}></i>Introduce Yourself</div>
                    <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputState" className={styles.nation}>NATIONALITY</label>
                        <select id="inputState" style={{borderRadius:"unset"}} name="guests" onChange={this.handleChange} className="form-control p-2">
                                                <option value ="0" selected>please select</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState" className={styles.nation}>REASON FOR TRAVEL</label>
                            <select id="inputState" style={{borderRadius:"unset"}} name="guests" onChange={this.handleChange} className="form-control p-2">
                                                <option value ="0" selected>please select</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                            </div>
                        
                    </div>
                    </form>
                    <div>
                        <br/>
                    <p className={styles.textColr}>Tell Ravi a little about yourself, what you're planning to do in udaipur ,
                     and why you'd like to stay with them. The host is more likely to accept your request with this information.</p>
                    </div>
                    <div class="mb-3"> 
                        <textarea class="form-control small" id="validationTextarea" placeholder="Message to host" required></textarea>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required /> 
                        <label className={styles.textColr} for="invalidCheck2">
                        I would like other hosts nearby to contact me with homestay offers
                        </label>
                    </div>

                    <div className={styles.textColor}><i class='fas fa-pen-alt' style={{fontSize:"20px",border:"1px",color:"#CA005D",padding:"5px"}}></i>Optional Information</div>
                    <p className={styles.textColr}>Adding this information will help your host get to know you before accepting this request, 
                    and it will be saved for other requests you send.</p>
                </div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputState" className={styles.nation}>GENDER</label>
                        <select id="inputState" style={{borderRadius:"unset"}} name="guests" onChange={this.handleChange} className="form-control p-2">
                                                <option value ="0" selected>please select</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                        </div>

                        <div class="form-group col-md-6">
                            <div class="row">
                                <div class="col-3">
                                <label for="inputState" className={styles.nation}>DAY</label>
                                    <select className={styles.selectStyle}>
                                                <option value ="0" selected>D</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                                </div>
                                <div class="col-6">
                                <label for="inputState" className={styles.nation}>MONTH</label>
                                    <select className={styles.selectStyle}>
                                                <option value ="0" selected>Month</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                                </div>
                                <div class="col-3">
                                <label for="inputState" className={styles.nation}>YEAR</label>
                                    <select className={styles.selectStyle}>
                                                <option value ="0" selected>Y</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-md-6">
                            <div className="row">
                                <div className="col-6">
                        <label for="inputState" className={styles.nation}>MOBILE</label>
                        <select id="inputState" className={styles.selectStyle}>
                                                <option value ="0" selected>please select</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                            </select>
                             </div>
                             <div className="col-6">
                             <label for="inputState1" className={styles.nation1}>NATIONALITY</label>
                             <input type="text" id="inputState1" aria-label="First name" class="form-control "/>
                             </div>
                            </div>
                        </div>

                        <div class="form-group col-md-6">
                            <div class="row">
                                <div className="col-5">
                                <div >
                                <img className={styles.imge} src="https://www.homestay.com/assets/user/graphic-avatar-placeholder-0f9a1eaaaad293c274aadb54ef4776c60ecb1d178e712b69b2b81002862e81f6.svg"/>
                                </div>
                                </div>
                                <div className="col-7">
                                <button type="button" class="btn btn-lg btn-primary mt-3" ><span style={{fontSize:"12px"}}>Upload Photo</span></button>
                                </div>
                            </div>
                        </div>
 
                    </div>
                    </form>
                    <button type="button" class="btn btn-lg btn-block" style={{background:"#CA005D"}}><span className="text-light">Send your Message</span></button>              
                    <p className={styles.textColr}>You must be 18 or over to book and/or stay in a homestay, unless accompanied by an adult</p>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactHostModal)
