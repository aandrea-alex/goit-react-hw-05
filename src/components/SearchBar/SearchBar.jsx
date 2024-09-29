import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, initialValue }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <CustomButton type="submit">
        <GoSearch />
        Search
      </CustomButton>
    </form>
  );
};

export default SearchBar;
