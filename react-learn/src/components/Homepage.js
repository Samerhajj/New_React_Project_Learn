import {React,useState,useContext, createContext} from 'react'
import ListCard from './ListCard';
import shortid from 'shortid';
import Select from './Select';
import styles from "./style.module.css"

import HistoryList from './HistoryList';
export default function Homepage({name}){
    const [counter,setCounter]= useState(0);
        const increase =()=>{setCounter(count=>count+1);};
    const [userList,setUserList]=useState([]);
    const decrease =()=>{setCounter(count=>count-1);};
    const reset =()=>{setCounter(0);};
        const[clientName,setClientName]=useState('');
        const handleSubmit = (e) =>{
            const client = {clientName,counter,selectC,isChecked,id:shortid.generate()};
            e.preventDefault();
            console.log(`Form Submitted,${clientName}`);
            setUserList([...userList,client])
    }
    const selectContext = createContext();

    const [selectC,setSelectC]= useState("");// state of selected value
   const [historyList,setHistoryList]=useState([]);
   
   const [isChecked, setIsChecked] = useState(false);

   const handleOnChange =()=>{
    setIsChecked(!isChecked);
   }


   console.log(userList);
    return(
    <div>
        <center>
        <h1>Hello from Homepage</h1>
        <h3>welcome to our {name}</h3>
        <hr></hr>
        <h1>React Counter</h1>
        <div>
        <span className='counter_output'>{counter}
        <div className='btn_container'>
            <button className='control_btn' onClick={increase}>Add One</button>
            <button className='control-btn' onClick={reset}>Reset</button>
            <button className='control-btn' onClick={decrease}>Sub One  </button>
            <selectContext.Provider value={selectC}>
             <Select selectC={selectC} setSelectC={setSelectC}/>
            </selectContext.Provider>

             <div className={styles.sc}>
                        {/* <div className="input-group-text"> */}
                        <div className="input-group-text">
                            {/* {check box} */}
                            <input checked={isChecked} onChange={handleOnChange}
                                className="form-check-input mt-0" type="checkbox" 
                                value="" aria-label="Checkbox for following text input"/>
                            <label >Take Away</label>
                        </div>
                    </div>





        </div>
        </span>
        <hr></hr>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) =>setClientName(e.target.value)}value = {clientName}></input>
            <button type='submit'>Submit</button>
        </form>
        </div>
        {/* <Card counter={counter}></Card> */}
       
        <ListCard userList={userList} setUserList={setUserList} historyList={historyList} setHistoryList={setHistoryList}/>
      
        <HistoryList historyList={historyList}></HistoryList>
     

        
        </center>
    </div>)
}
