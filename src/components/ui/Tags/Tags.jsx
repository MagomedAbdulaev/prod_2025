import React, {useState, useEffect, useRef} from 'react';
import Title from '../../ui/Title/Title.jsx';
import './Tags.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import Message from '../Message/Message.jsx';


function Tags(props) {

    const [messageOpen, setMessageOpen] = useState(false);
    const timerId = useRef(null); // Храним идентификатор таймера
    const [tags, setTags] = useState([]);
    const [modal, setModal] = useState(false);
    const [tagName, setTagName] = useState('');
    const [tagNameError, setTagNameError] = useState(false);

    useEffect(()=>{
        setTags([
            { id: 1, name: 'первый' },
            { id: 2, name: 'второй' },
            { id: 3, name: 'третий' },
            { id: 4, name: 'четвертый' },
            { id: 5, name: 'пятый' },
            { id: 6, name: 'шестой' },
            { id: 7, name: 'седьмой' },
            { id: 8, name: 'восьмой' },
            { id: 9, name: 'девятый' },
            { id: 10, name: 'десятый' },
            { id: 11, name: 'одиннадцатый' },
            { id: 12, name: 'двенадцатый' }
        ])
    }, []);

    const handleAddTag = () => {

        if(tagName.length === 0){
            setTagNameError('Введите название тега');
            return;
        }

        setTagNameError('');

        // ZAPROS

        setModal(false);
        setTags([...tags, {id: tags[tags.length-1].id + 1, name: tagName}]);
        setTagName('');
        
        setMessageOpen(true);
        // Если таймер уже запущен, сбрасываем его
        if (timerId.current) {
            clearTimeout(timerId.current);
        }

        // Запускаем новый таймер
        timerId.current = setTimeout(() => {
            setMessageOpen(false);
        }, 4000);

    };

    return (
        <div className='tags__container'>
            <Title name='Список тегов' />   
            <ul className='tags'>
                {tags.map((item)=>(
                    <li key={item.id} className='tags__item'>{item.name}</li>
                ))}
            </ul>
            <div className="add_tag">
                <Button button_data={{
                    title: 'Добавить тег',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    padding: '12px',
                    maxWidth: '250px',
                    is_link: false,
                    click: ()=>{setModal(true)},
                }} />
            </div>
            <div className="overlay" onClick={()=>{setModal(false);setTagNameError('');}}></div>
            {modal && (
                <div className="modal">
                    <Input input_data={{
                        type: 'text',
                        placeholder: 'Математика',
                        value: tagName,
                        onChange: (e) => setTagName(e.target.value),
                        error: tagNameError,
                    }} />

                    <Button button_data={{
                        title: 'Добавить',
                        background: '#FFA500',
                        color: 'var(--color-white)',
                        padding: '12px',
                        is_link: false,
                        click: handleAddTag
                    }} />
                </div>
            )}
            <Message message_open={messageOpen} name='Успешно добавлено'/>
        </div>
    );

}

export default Tags;