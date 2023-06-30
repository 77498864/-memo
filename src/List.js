import React,{useState} from 'react'
import './Home.css'
import Item from './Item'
import Button from 'react-bootstrap/Button';

const List = ({ListData,deleteData}) => {
    return(
        ListData.map(item => (
            <div className='List'>
                <Item 
                    key={item.id} 
                    id = {item.id}
                    con={item.con} 
                    date={item.date} 
                    time={item.time}
                    deleteData={deleteData}
                    />
            </div>   
        ))
    );
}

export default List;