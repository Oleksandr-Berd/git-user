import * as SC from "./HeaderStyled"

import Logo from "../../ui/Logo/Logo";
import ThemeSwitcher from "../../ui/ThemeSwitcher/ThemeSwitcher";

const Header:React.FC = () => {
    return ( <SC.HeaderStyled>
        <Logo/>
        <ThemeSwitcher/>
    </SC.HeaderStyled> );
}
 
export default Header;