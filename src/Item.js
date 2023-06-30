import React,{useState} from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';

const Item = ({id,con,date,time,deleteData}) => {

    function deletedata (){
        if(window.confirm('確定要刪除嗎?')){
            deleteData(
                function(prevdata){
                    return prevdata.filter(item => item.id !== id)
                }
            )
        }
        else{
        }
    }

    return(
        <div className='item'>
            <div className='item-con'> 
                <p>{con} <br /> {date} {time}</p>
            </div>
            <button className='item_btn' onClick={deletedata}>刪除</button>
        </div>
    );
}
export default Item;