import React, {useState} from 'react';
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import './Chat.css';
import axios from "axios";
import HostBackend, {getCookie} from "../../../main.jsx";


function Chat(props) {

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);

    const handleSubmitMessage = () => {

        if(message === ''){
            setMessageError(true);
            return;
        }

        setMessageError(false);

        axios.post(`${HostBackend}send_message/`, {
            token: localStorage.getItem('token'),
            message: message,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            withCredentials: true,
        })
            .then(response => {
                console.log('success')
            })
            .catch(error => {
                console.error("Error fetching services:", error);
            });

    }

    return (
        <div className='chat'>
            <div className="chat__content">
                <p className='chat__empty'>Чат пока пуст</p>
            </div>
            <section className="chat__actions">
                <Input input_data={{
                    title: '',
                    type: 'text',
                    placeholder: 'Ваше сообщение',
                    value: message,
                    onChange: (e) => setMessage(e.target.value),
                    error: messageError,
                }} />
                <Button button_data={{
                    title: 'Отправить',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    padding: '12px',
                    is_link: false,
                    click: handleSubmitMessage,
                }} />
            </section>
        </div>
    );

}

export default Chat;