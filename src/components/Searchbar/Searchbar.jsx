// import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ handleQuery, queryValue = '' }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(queryValue);
  }, [queryValue]);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    handleQuery(query);
  };
  return (
    <div className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handlerFormSubmit}>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
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
