import React from 'react'
import styles from './Reviews.module.css'

export default function Reviews() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3 p-3 ">
                                <div>
                                <img className = {styles.imgheight} src="https://www.homestay.com/assets/user/graphic-avatar-placeholder-0f9a1eaaaad293c274aadb54ef4776c60ecb1d178e712b69b2b81002862e81f6.svg" alt="image"/>
                                </div>
                                <p class="muted">Italy</p>
                                <p class="muted">Age : 45</p>
                            </div>
                            <div className="col-9">
                                <div class="row">
                                <div className="text-left col-6">left</div>
                                <div className="float-right col-6">right</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
