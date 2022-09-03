import {React,useState,createContext,useRef, useEffect,useContext} from 'react'

import CardList from './CardList';
import shortid from 'shortid';
import HistoryList from './HistoryList'
import Select from './Select';
import styles from "./style.module.css"
import NavBar from './NavBar';

export const UserContext = createContext();//new day


export default function Homepage(props){
    console.log("Home page rendered")



    const [counter,setCounter]= useState(0);
    // const [text,setText] = useState("");
    const text = useRef();
    
    const [historyList,setHistoryList]=useState([]);//get value and set history
    const [ls,setLs]=useState([]);//Main List has all the items
    const [selectC,setSelectC]= useState("");// state of selected value

    //Add button functions:
    const increase =()=>{ setCounter(count=>count+1);};
    const Decrease =()=>{setCounter(count=>count-1);};
    const Zero =()=>{setCounter(count=>0);};
    
    //text methods :
    // const changedMethod = (event)=>{setText(event.target.value);};
    const changedMethod = (event)=>{text.current=event.target.value};

    //handle submit buttion
    const handleSubmit =(event)=>{
        event.preventDefault();//Prevent refreshing the page
        const data = {text,counter,selectC,isChecked,id:shortid.generate()};
        setLs([...ls,data])
        // setText("");
        
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    





    return(    
    
    <UserContext.Provider value={{selectC,setSelectC}}>

    <div className='container'>
    

        <NavBar/>
        <center>
            <hr/>
            <form onSubmit={handleSubmit} ref={text}>
                <h1>React Counter</h1>

                {/* increase , Decrease ,Zero buttons  */}
                <div className='btn_container m-1'>
                    <button  type='button' className='btn btn-dark m-1' onClick={Zero}>→Zero←</button>
                    <button  type='button' className='btn btn-dark m-1' onClick={increase}>Add One</button>
                    <button  type='button' className='btn btn-dark m-1' onClick={Decrease}>Sub One</button>
                </div>

                {/* Select Coffee */}


                {/* <UserContext.Provider value={{selectC,setSelectC}}> */}
                    {/* {props.childern} */}
                                   <Select />                    
                {/* </UserContext.Provider>  */}





                <div className='counter_output m-2'>
                    <span className={styles.st}><b>{counter}</b></span>
                    
                    
                    


                    
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
                <div>
                    <input className='form-control' style={{width:200}} ref={text} type="text" onChange={changedMethod} placeholder='Enter Client Name'></input>
                </div>

                <button type='submit' className='m-3'>Submit</button>
                
            </form>

            {/* Card List Map */}
            <CardList isChecked={isChecked} setLs={setLs} ls = {ls} historyList={historyList} setHistoryList={setHistoryList}/>
            
            {/* History List Map */}
            <HistoryList historyList={historyList}/>

        </center>
    </div>
    </UserContext.Provider> 

    )
}
