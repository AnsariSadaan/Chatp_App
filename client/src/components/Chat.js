import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import {useLocation} from 'react-router-dom';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const location = useLocation();
  const ENDPOINTS = "localhost:5000";
  useEffect(()=>{
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINTS);

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room} , ()=>{ 

    });

    return ()=> {
      socket.emit('disconnect');
      socket.off()
    }
  }, [location.search , ENDPOINTS]); 
  return (
    <div>Chat</div>
  )
}

export default Chat