import History from "./History";
export default function HistoryList({historyList})
{
  
    

return (
    <div>
        <ul className="list-group">
            {
        historyList.map((m)=>{
            return(
                <li className="list-group-item">
                    <History m={m}/>
                </li>
                
            );
        })
            }
            </ul>
    </div>
);
        }