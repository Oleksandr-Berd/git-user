import { useFormik } from "formik";
import { ChangeEvent } from "react";

import * as SC from "./SearchFormStyled";

import SearchButton from "../SearchButton/SearchButton";

import magnifying from "../../assets/images/magnifying.svg";
import { Submit } from "../../utils/types/types";

const SearchForm: React.FC<Submit> = ({ submit }) => {
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => console.log(values),
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    formik.handleChange(evt);
  };

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>):void => {
    evt.preventDefault();

    submit(formik.values.query);

    formik.resetForm()
  };

  return (
    <SC.FormStyled bg={magnifying} onSubmit={handleSubmit}>
      <SC.InputStyle
        type="text"
        name="query"
        value={formik.values.query}
        placeholder="Search GitHub username…"
        onChange={handleChange}
      />
      <SearchButton />
    </SC.FormStyled>
  );
};

export default SearchForm;
