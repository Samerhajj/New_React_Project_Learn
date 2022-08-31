export default function Card({clientName,counter,setUserList,id,userList,item,setHistoryList,historyList}){


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
  <div class="card-body">
    <h5 class="card-title">Client Name:{clientName}</h5>
    <div class="row">
                    <div class="col-xs-12">
                    <p class="card-text">Number of Coffee: {counter}</p>
                        <button class="btn btn-primary" type="submit">Go somewhere</button>
                        <button class="btn btn-danger" onClick={deleteCard} type="button">Delete</button>
                    </div>
                </div>
  </div>
  </div>
 </>
    )
}        
    