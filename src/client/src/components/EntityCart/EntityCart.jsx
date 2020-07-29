import React from 'react'
import styles from "./EntityCart.module.css"
import { useSelector } from "react-redux"

export default function EntityCart(props) {
    let { booking_guest,nights } = useSelector(state => state.booking)
    let {name,price_1_night} = useSelector(state => state.entity.bedroom)

    if (booking_guest <= 0) {
        return null
    }

    return (
        <div className={styles.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className={styles.table_container}>
                            <table className="table table-borderless small">
                                <tr>
                                    <th>You have selected</th>
                                    <th>Nights</th>
                                    <th>Price of Stay</th>
                                    <th>Booking Fee	</th>
                                    <th>Total</th>
                                </tr>
                                <tr>
                                    <td>
                                        <p>{booking_guest} Guest - {name}</p>
                                    </td>
                                    <td>
                                        <p>{nights}</p>
                                    </td>
                                    <td>
                                        <p>₹{price_1_night*nights}</p>
                                    </td>
                                    <td>
                                        <p>₹{Math.ceil(price_1_night*15*nights/100)}</p>
                                    </td>
                                    <td>
                                        <p>₹{(price_1_night+(Math.ceil(price_1_night*15/100)))*nights}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className={styles.button_container}>
                            <button className={styles.button}>Contact Host</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
