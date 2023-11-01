import * as SC from "./ThemeSwitcherStyled"

import {ReactComponent as SunIcon} from "../../assets/images/sunIcon.svg"

const ThemeSwitcher = () => {
    return ( <SC.Wrapper>
        <SC.Name>light</SC.Name>
        <SunIcon/>
    </SC.Wrapper> );
}
 
export default ThemeSwitcher;