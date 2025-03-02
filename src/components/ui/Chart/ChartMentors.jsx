import React from 'react';
import Title from '../Title/Title';
import './Chart.css';


function ChartMentors() {
    
    const dataMentorsBest = [
        { name: 'Анатолий Микьзаралдов', value: 4.3, count: 11 },
        { name: 'Алексей Иванов', value: 4.27, count: 17 },
        { name: 'Борис Сигмов', value: 4.1, count: 12 },
        { name: 'Кирилл Алексеев', value: 4, count: 12 },
        { name: 'Антон Нестеренко', value: 3.91, count: 19 },
    ];

    return (
        <div className='chart'>
            <Title name='Самые лучшие менторы по оценке учеников' />
            <table className='chart__table'>
                <thead>
                    <tr className='table__row'>
                        <th className='table__cell'>Имя ментора</th>
                        <th className='table__cell'>Оценка</th>
                        <th className='table__cell'>Количество оценивших</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMentorsBest.map((mentor, index) => (
                        <tr key={index} className='table__row'>
                            <td className='table__cell cell_name'>{mentor.name}</td>
                            <td className='center-text table__cell'>{mentor.value}</td>
                            <td className='table__cell table__count'>{mentor.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ChartMentors;
