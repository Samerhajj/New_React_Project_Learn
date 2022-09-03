import { useEffect } from "react";
import React from "react";
function History({m}){
    //   useEffect(()=>console.log("renderd"),[m]);
      console.log("History rendered")

    return(
    <>
        <b>{m.selectC}</b> Order of by "<b>{m.text}</b>" with amout of order : <b>{m.counter}</b>
        {/* Number of orders : {m.counter }<p>Name of Clinet : {m.text}</p>  */}
    </>
    );
}
export default React.memo(History)