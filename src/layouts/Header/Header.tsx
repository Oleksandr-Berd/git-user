import * as SC from "./HeaderStyled"

import Logo from "../../ui/Logo/Logo";
import ThemeSwitcher from "../../ui/ThemeSwitcher/ThemeSwitcher";
import { HeaderProps } from "../../utils/types/types";

const Header:React.FC<HeaderProps> = ({toggleMode, mode}) => {
    return (
      <SC.HeaderStyled>
        <Logo />
        <ThemeSwitcher toggleMode={toggleMode} mode={mode}/>
      </SC.HeaderStyled>
    );
}
 
export default Header;