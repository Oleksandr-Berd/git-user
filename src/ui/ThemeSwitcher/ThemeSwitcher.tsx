import * as SC from "./ThemeSwitcherStyled"

import {ReactComponent as SunIcon} from "../../assets/images/sunIcon.svg"
import { ReactComponent as MoonIcon } from "../../assets/images/moon.svg";

import { HeaderProps } from "../../utils/types/types";

const ThemeSwitcher:React.FC<HeaderProps> = ({toggleMode, mode}) => {
    return ( <SC.Wrapper onClick={toggleMode}>
        <SC.Name>{mode==="dark" ? "light" : "dark"}</SC.Name>
        {mode==="dark" ? <SunIcon/> : <MoonIcon/>}
    </SC.Wrapper> );
}
 
export default ThemeSwitcher;