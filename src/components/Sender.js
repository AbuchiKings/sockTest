import React, { useEffect, useRef } from 'react';
import socketio from 'socket.io-client'


const ENDPOINT = 'https://app.scanpay.ng'
const ENDPOINT1 = 'http://localhost:8005'

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
        ref.current.socket.emit('addUser', {
            userId: '6072064d8fed772c94d25707', category: "sender", role: 'user',
            reference: 'POS-fb66c64a470b9b4cd516a2d26523ddd3$6072064d8fed772c94d25707'
        });
        return () => ref.current.socket.disconnect()
    }, []);

    ref.current.socket.on('joined', data => {
        console.log(data)
    })

    return (
        <div>
            <h1>Transaction</h1>
        </div>
    );
}

export default Sender;
