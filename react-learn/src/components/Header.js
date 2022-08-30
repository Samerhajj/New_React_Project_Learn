export default function Header(props){
   return(
    
    <div className="relative overflow-hidden bg-hero pattern bg-center bg-cover md:bg-top pb-32 max-w-screen-2x1 mx-auto">
        <div className="absolute inset-0 bg-opacity-80 bg-gray-100 transform origin-top-left -skew-y-25">

        </div>
        <center>
        <img 
         height={200} width={800}
         src="https://external-preview.redd.it/vKcBUwvsSx_HACxyughWAXpZh7zRunsk2UjrKLV2-w0.jpg?width=960&crop=smart&auto=webp&s=5ebda20756de88e046cef2ca36e3375e404ff365" 
         alt="MDN logo"/>
</center>
    </div>
   )
}