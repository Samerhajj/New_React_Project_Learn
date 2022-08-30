export default function Card({clientName,counter,setUserList,id,userList,item}){


   const deleteCard =()=>{
    setUserList(userList.filter((identity)=>identity.id!==item.id));
   }
    
    

  
    return(
      <>
  <div class="card-body">
    <h5 class="card-title">{clientName} {counter}</h5>
    <div class="row">
                    <div class="col-xs-12">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary" type="submit">Go somewhere</button>
                        <button class="btn btn-danger" onClick={deleteCard} type="button">Delete</button>
                    </div>
                </div>
  </div>
 </>
    )
}        
    