// import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ handlerSearchRequest }) => {
  const [query, setQuery] = useState('');

  const handlerInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  // const handlerFormSubmit = e => {
  //   e.preventDefault();
  //   handlerSearchRequest(searchRequest, page);
  //   setPage(1);
  //   setSearchRequest('');
  // };

  return (
    <div className={styles.searchbar}>
      <form
        className={styles.searchForm}
        //  onSubmit={handlerFormSubmit}
      >
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}></span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={handlerInputChange}
        />
      </form>
    </div>
  );
};

export default Searchbar;

// Searchbar.propTypes = { handlerSearchRequest: PropTypes.func };
