import React, { useEffect, useState } from 'react';
import Events from '../events/Events';

const Main = () => {
    const [loading, setLoading] = useState(true)
    const url = 'https://glacial-mountain-57084.herokuapp.com/events';
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEvent(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='row container mx-auto mb-5'>
            {
                loading && <div className="d-flex justify-content-center w-100 mt-5">
                    <div class="spinner-grow text-white" style={{ width: '15rem', height: '15rem' }} role="status">

                    </div>
                </div>
            }
            {
                event.map(ev => <Events sEvent={ev}></Events>)
            }
        </div>
    );
};

export default Main;