import styles from "./style.module.css";
import React from "react";
function Card({isChecked,selectC,id,idx,lsItem,setLs,ls,data,text,counter,setHistoryList,historyList}){
    console.log("Card rendered")

    const deleteCard =()=>{
    let tempList = historyList;
    tempList.push(lsItem)
    setHistoryList(tempList);
    setLs( ls.filter((item)=>item.id !== lsItem.id))
    // console.log(ls)
    }

    return(
    <div className="card" width={200}>
        <div className="card-body">

            <p className="card-title">
                <span className={styles.st}>Clinet Name : 
                    <span><b>{text.current  }</b></span>
                </span>
            </p>

            <p className="card-text">
                <span  className={styles.st}>Number of Coffee : {counter}</span>
            </p>

            <p className="card-text"><span  className={styles.st}>Selected Coffee : {selectC}</span></p>
            {isChecked ? <h6 className={styles.stm}>TakeAway</h6> : <h6 >Sit</h6>}
            <a href="#" className="btn btn-primary m-1">Go somewhere</a>
            
            <button onClick={deleteCard} type="button" className="btn btn-danger ">Delete</button>
        </div>
    </div>
    )
}
export default React.memo(Card)
