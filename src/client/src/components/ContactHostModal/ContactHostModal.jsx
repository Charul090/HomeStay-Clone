import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './ContactHostModal.module.css'
import { useSelector, useDispatch } from "react-redux"
import { RESET } from "../../redux/PaymentRedux/action.js"
import { useHistory } from "react-router-dom"


export default function ContactHostModal(props) {

    let { start,
        end,
        status,
        booking } = useSelector(state => state.payment)

    let { guests, beds } = useSelector(state => state.entity.bedroom)

    let dispatch = useDispatch()
    let history = useHistory()

    let [show, setShow] = useState(false)

    useEffect(() => {

        if (start, end, status) {
            setShow(true)
        }

        if (start, end, status, booking) {
            setTimeout(() => {
                setShow(false)
                dispatch(RESET())
                history.push("/destination")

            }, 5000)
        }

    }, [start, end, status, booking])


    return (
        <>
            <Modal className={styles.main} show={show} onHide={() => { setShow(false) }} animation={false} >

                <Modal.Body style={{ background: "rgba(183, 177, 174, 0.3)" }}>

                    <div class="row mod">
                        <div class="col-4">
                            <div className={styles.check}>
                                <p className="font-weight-bold">CHECK IN</p>
                                <p className="small">{`${new Date(props.start_date).toDateString()}`}</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div className={styles.check}>
                                <p className="font-weight-bold">CHECK OUT</p>
                                <p className="small">{`${new Date(props.end_date).toDateString()}`}</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div className={styles.check}>
                                <p className="font-weight-bold"><span className={styles.spanLabel}>{props.nights} {props.nights === 1 ? "Night" : "Nights"}</span></p>
                                <p className="small">{guests} {guests === 1 ? "Guest" : "Guests"}</p>
                                <p className="small">1 {beds}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="p-5">
                        {
                            start && end ?
                                <div>
                                    <p className="lead">
                                        <i class="far fa-check-circle text-success h4"></i>
                                        <span className="ml-4 pt-1">Payment Confirmed</span>
                                    </p>
                                </div>
                                :
                                <div className="d-flex align-middle">
                                    <div class="spinner-border text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div className="ml-4 pt-1">
                                        <p className="lead">Confirming payment</p>
                                    </div>
                                </div>
                        }
                        {
                            start && end && booking?
                                <div>
                                    <p className="lead">
                                        <i class="far fa-check-circle text-success h4"></i>
                                        <span className="ml-4 pt-1">Booking Confirmed</span>
                                    </p>
                                </div>
                                :
                                <div className="d-flex align-middle">
                                    <div class="spinner-border text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div className="ml-4 pt-1">
                                        <p className="lead">Confirming booking</p>
                                    </div>
                                </div>
                        }
                        {
                            start && end && booking?
                                <div>
                                    <p className="lead">
                                        You will receive mail regarding details of Booking.
                                    </p>
                                    <h3 className="h4">Happy Homestaying!</h3>
                                </div>
                                :
                                null
                        }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

