import History from "./History";
export default function HistoryList({historyList})
{
  
    

return (
    <div>
        <ul classNameName="list-group">
            {
        historyList.map((m)=>{
            return(
                <li classNameName="list-group-item">
                    <History m={m}/>
                </li>
                
            );
        })
            }
            </ul>
    </div>
);
        }