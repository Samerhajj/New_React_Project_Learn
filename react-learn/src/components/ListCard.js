
import Card from "./Card"
export default function ListCard({userList,setUserList}){


    return(
        <div className="row-wrapper">
                {
                userList.map((item)=>(
                    <Card counter={item.counter}
                    clientName={item.clientName}
                    userList={userList}
                    setUserList={setUserList}
                    id = {item.id}
                    item={item}/>
                ))
                }
        </div>

    )
}