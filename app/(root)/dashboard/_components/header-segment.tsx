import { Logout } from "./logout-segment";

const Header = () => {
    return ( 
        <div className="w-full px-2 overflow-hidden justify-between items-center sticky h-[8rem] bg-red-200 flex">
            <Logout/>
        </div>
     );
}
 
export default Header;