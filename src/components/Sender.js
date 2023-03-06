import React, { useEffect, useRef } from 'react';
import socketio from 'socket.io-client'


const ENDPOINT = 'https://app.scanpay.ng'
const ENDPOINT1 = 'http://localhost:8000/users'

const Sender = () => {
    const ref = useRef({
        socket: socketio(ENDPOINT1, {
            transports: ['websocket', 'polling'],
            auth: {
                jwt: localStorage.getItem('jwt')
            }
        })
    })
    useEffect(() => {
        ref.current.socket.emit('user:join', {
            "user_id": "634d3f9c5f6c3a4a9014effe", txn_reference:'FND-56VuFM3Hp7cCG1AD1673960411912'
        });
        return () => ref.current.socket.disconnect()
    }, []);

    ref.current.socket.on('user:joined', data => {
        console.log(data)
    })
    ref.current.socket.on('user:transaction:update', data => {
        console.log(data)
    })
    ref.current.socket.on('user:join:failed', data => {
        console.log(data)
    })

    return (
        <div>
            <h1>Transaction</h1>
        </div>
    );
}

export default Sender;
