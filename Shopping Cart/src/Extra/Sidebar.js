
import "../App.css";

function Sidebar(){
    
    
//   Used to toggle the menu button
        const Sidebar_open= () => {
            document.querySelector('#sidebar').style="left:0px"; 
            //  document.queerySelector('#sidebar-btn').classList.toggle('sidebar-btn-close');
            document.getElementsById('#sidebar-btn').style="display:none";
        }

        const SidebarClose =() => {
        //    document.querySelector('#sidebar').style="left:-100px"; 
        document.querySelector('#sidebar').style="left:-100px"; 
        document.getElementsByClassName('#sidebar-btn').style="display:block";
        
        }
    return (

     <div id="sidebar" >
          


        <div id ="sidebar-btn" onClick={Sidebar_open} title="Menu">
       
            <span></span>
            <span></span>
            <span></span>
        
        </div>
        

        <div className="material-icon-close"  onClick={SidebarClose}>

            <span className="material-icons">close</span>

        </div>

        <div className="buttons">
       <button onClick={"/"}>Button1</button>
       <button onClick={"/"}>Button2</button>
       <button onClick={"/"}>Button3</button>
       <button onClick={"/"}>Button4</button>
        </div>


        </div>
     
    );
}
export default Sidebar;