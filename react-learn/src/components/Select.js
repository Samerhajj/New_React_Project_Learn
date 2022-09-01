
import React,{useContext} from "react";
export default function Select({setSelectC}){
    
    const selectHandle = (event)=>{
        setSelectC(event.target.value);
    }
    return(
        <select style={{ width:200} } className="form-select" aria-label="Default select example" id="lang" onChange={selectHandle}>
                  <option value="Select">Select</option>
                  <option value="Ice Coffee">Ice Coffee</option>
                  <option value="Hot Chocolate">Hot hocolate</option>
                  <option value="Espresso">Espresso</option>
                  <option value="Black Coffee">Black Coffee</option>
                  {/* {console.log(selectC)} */}
        </select>
    )
}
