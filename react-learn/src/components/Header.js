export default function Header(){
    console.log("Header rendered")
    return(
        <div>
        <center><div>Welcome to Coffee Shop</div>
        
        <img className="img-fluid"
         height={72} width={288}
         src="https://external-preview.redd.it/vKcBUwvsSx_HACxyughWAXpZh7zRunsk2UjrKLV2-w0.jpg?width=960&crop=smart&auto=webp&s=5ebda20756de88e046cef2ca36e3375e404ff365" 
         alt="MDN logo"/>
        </center>
        </div>
    )
}