import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => { 
    e.preventDefault(); 
    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 1) return;

    // setCategories( categories =>  [inputValue, ...categories]);
    onNewCategory(newInputValue);

    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Search Gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};