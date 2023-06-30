import React,{useState} from 'react'
import './Home.css'
import List from './List'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import {v4 as uuidv4} from 'uuid';

const Home = () => {
    const [data,setData] = useState([]);
    const [con,setCon] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");

    function addData(){
        setData(function(prevData){
            return [...prevData,{
                id: uuidv4(),
                con,
                date,
                time
            }]
        })
    }

    return(
        <div className="full_container">
            <div className='sub_container'>
                <Card className='Regular shadow'>
                    <Card.Body>
                        <h1>備忘錄</h1>
                        <h3>內容</h3>
                        <input type="text" value={con} onChange={(e) => {setCon(e.target.value)}}/>
                        <h3>日期</h3>
                        <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                        <h3>時間</h3>
                        <input type="time" value={time} onChange={(e) => {setTime(e.target.value)}}/>
                        <br />
                        <Button variant="dark" onClick={addData}>新增</Button>
                        <List ListData={data} deleteData={setData}/>
                        </Card.Body>
                </Card>
            </div>
        </div>   
    ); 
}

export default Home;