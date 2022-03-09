import React from 'react'
import picture from '../img/workout.jpg'
import valo from '../img/valo.jpg'
import '../styles/Saturday.css';
import pizza from '../img/pizza.jpg'
import code from '../img/code.jpg'
import fit from '../img/fit.jpg'
const Saturday = () => {
    return (
        <>
            <div className='container d-flex'>

                <div className="card">
                    <img src={picture} className="card-img-top" alt="picture here" style={{
                        width: "300px",
                        height: "400px",
                        /* marginLeft: '100px' */
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">Workout</h5>
                        <p className="card-text">I woke up around 8:00am, and did some workouts. The challenge that i've been following is Pamela Reif's Hour Glass challenge</p>

                    </div>
                </div>

                <div className="card">
                    <img src={pizza} className="card-img-top" alt="picture here" style={{
                        width: "300px",
                        height: "400px",
                        /* marginLeft: '100px' */
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">Pizza</h5>
                        <p className="card-text">Our Dinner was squash soup and Angel's Pizza, i just ate 2 slices because im that weak when it comes to eating pizza.</p>

                    </div>
                </div>


            </div>

            <div className='container d-flex container2'>
                <div className="card">
                    <img src={code} className="img" alt="picture here" style={{
                        /* marginLeft: '100px' */
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">Coding Mode: On</h5>
                        <p className="card-text">Just finished the CSS assignment that was given to us by sir Jhun.</p>

                    </div>
                </div>



                <div className="card">
                    <img src={fit} className="img" alt="picture here" style={{
                      /*  marginLeft: '90px' */
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">Otw to QC</h5>
                        <p className="card-text">Just took some mirror selfie, before i went to Quezon City!</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Saturday