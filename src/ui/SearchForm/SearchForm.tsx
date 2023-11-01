import * as SC from "./SearchFormStyled"

import SearchButton from "../SearchButton/SearchButton";

import magnifying from "../../assets/images/magnifying.svg"

const SearchForm = () => {
    return (
      <SC.FormStyled bg={magnifying}>
        <SC.InputStyle type="text" placeholder="Search GitHub username…" />
        <SearchButton />
      </SC.FormStyled>
    );
}
 
export default SearchForm;