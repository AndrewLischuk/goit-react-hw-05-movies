// import PropTypes from 'prop-types';

import { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ handleQuery, value = '' }) => {
  //   const [query, setQuery] = useState('');

  //   const handleInputChange = e => {
  //     const { value } = e.currentTarget;
  //     console.log(value);
  //     setQuery(value);
  //   };

  const handlerFormSubmit = e => {
    e.preventDefault();
    // handleQuery(query);
  };
  return (
    <div className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handlerFormSubmit}>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          value={value}
          autoFocus
          placeholder="Search images and photos"
          // onChange={e => handleQuery(e.currentTarget.value)}
          // onChange={handleInputChange}
          onChange={e => handleQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}></span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

// Searchbar.propTypes = { handlerSearchRequest: PropTypes.func };
