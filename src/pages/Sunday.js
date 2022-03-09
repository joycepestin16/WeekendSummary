import React from 'react'
import '../styles/Sunday.css'
import picture from '../img/workout.jpg'
import morningpicture from '../img/sunrise.jpg';
import memorial from '../img/memorial.jpg';
import travel from '../img/travel.jpg';
import home from '../img/home.jpg';

const Sunday = () => {
    return (
        <>
            <div className='container d-flex'>

                <div className="card">
                    <img src={morningpicture} className="img" alt="picture here" style={{
                        marginLeft: "10px"
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">Morning </h5>
                        <p className="card-text">Wake up at 6:00am, pampered my self: took a bath, skin care, drink some vitamins</p>
                        
                    </div>
                </div>

                <div className="card">
                    <img src={memorial} className="img" alt="picture here" />
                    <div className="card-body">
                        <h5 className="card-title">My Friend's Memorial</h5>
                        <p className="card-text">Last February 28, 2022 my friend passed away due to Hodgkins Lymphoma</p>
                        
                    </div>
                </div>

                <div className="card">
                    <img src={travel} className="img" alt="picture here"  />
                    <div className="card-body">
                        <h5 className="card-title">Mirror Selfie</h5>
                        <p className="card-text">After the memorial we went to mall to "pagpag", ate some ice cream and chikahan with friends.</p>
                       
                    </div>
                </div>

                <div className="card">
                    <img src={home} className="img" alt="picture here" />
                    <div className="card-body">
                        <h5 className="card-title">Home Bound</h5>
                        <p className="card-text">After having teas and chikas with friend, i immediately travel and went home straight to Cavite.</p>
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sunday