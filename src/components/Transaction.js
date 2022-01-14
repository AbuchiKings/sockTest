import React, { useEffect, useRef } from 'react';
import socketio from 'socket.io-client'


const ENDPOINT = 'http://localhost:8080'

const Transaction = () => {
    const ref = useRef({
        socket: socketio(ENDPOINT, {
            transports: ['websocket', 'polling'],
            // auth: {
            //     jwt: localStorage.getItem('jwt')
            // }
        })
    })
    useEffect(() => {
        ref.current.socket.emit('join', {
            userId: '606ec4b138af2e2bb8805578', category: 'recipient',
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

export default Transaction;
