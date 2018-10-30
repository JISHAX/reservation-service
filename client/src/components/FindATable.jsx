import React from 'react';
import Desc from './Desk.jsx';
import Booking from './Booking.jsx';

class MainBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-body-container">
                <Desc />
                hi
                <Booking />
            </div>
        )
    }
}

export default MainBody;