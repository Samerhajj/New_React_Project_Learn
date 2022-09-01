
import Card from "./Card"
export default function ListCard({userList,setUserList,historyList,setHistoryList}){


    return(
        <div className="row-wrapper">
                {
                userList.map((item)=>(
                    <Card counter={item.counter}
                    clientName={item.clientName}
                    selectC={item.selectC}
                    isChecked={item.isChecked}
                    userList={userList}
                    setUserList={setUserList}
                    id = {item.id}
                    item={item}
                    setHistoryList={setHistoryList}
                    historyList={historyList}
                   
                  />
                ))
                }
        </div>

    )
}