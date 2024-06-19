import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

function Button(){
    
    
    return(<>
           
           <button className="firstbutton"> <MdMessage fontSize="15px" />VIA SUPPORT CHAT</button>
           <button className="firstbutton"> <IoCallOutline  />VIA CALL</button><br/>
           <button className="emailbutton" ><MdOutlineMessage />VIA EMAIL FORM</button>
           
            </>);
}

export default Button