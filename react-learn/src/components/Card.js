import styles from "./style.module.css"

export default function Card({clientName,counter,setUserList,id,userList,item,setHistoryList,historyList,selectC,isChecked}){


   const deleteCard =()=>{

    let templist = historyList;
    console.log("hello from delete card");
    templist.push(item);
    //setHistoryList(templist);
    setUserList(userList.filter((identity)=>identity.id!==item.id));
   }
    
    
  
    return(
      <>
      <div className="card" width={200}>
  <div className="card-body">
    <h5 className="card-title">Client Name:{clientName}</h5>
    <div className="row">
                    <div className="col-xs-12">
                    <p className="card-text">Number of Coffee: {counter}</p>
                    <p className="card-text">Type of Coffee:{selectC}</p>
                    <p className="card-text"><span  className={styles.st}>Selected Coffee : {selectC}</span></p>
            {isChecked ? <h6 className={styles.stm}>TakeAway</h6> : <h6 >Sit</h6>}
            <a href="#" className="btn btn-primary m-1">Go somewhere</a>

                   

                        <button className="btn btn-primary" type="submit">Go somewhere</button>
                        <button className="btn btn-danger" onClick={deleteCard} type="button">Delete</button>
                    </div>
                </div>
  </div>
  </div>
 </>
    )
}        
    