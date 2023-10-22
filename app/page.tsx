'use client';
import styles from './page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { searchAnimals, clearResults } from './GlobalRedux/Features/Animals/AnimalsSlice';
import { RootState } from './GlobalRedux/store';
import { useState } from 'react';
import SearchResult from './Components/SearchResult';
import InfiniteScroll from 'react-infinite-scroll-component';
import AnimalDetail from './Components/AnimalDetail';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const { animals } = useSelector((state: RootState) => state.animals);

  const loadMoreResults = () => {
    dispatch(searchAnimals(inputValue));
  };
  function doPesquisar() {
    dispatch(clearResults())
    dispatch(searchAnimals(inputValue));
  }
  return (
    <main className={styles.main}>
      <h1>Google</h1>
      <input className={styles.input} value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={doPesquisar}>Pesquisar</button>
      <div className={styles.searchResultContainer}>
        <div className={styles.searchResult}>
          <InfiniteScroll
            dataLength={animals.length}
            next={loadMoreResults}
            hasMore={hasMore}
            loader={<h4>Carregando...</h4>}
          >
            <SearchResult />
          </InfiniteScroll>
        </div>
        <div>
          <AnimalDetail />
        </div>
      </div>
    </main >
  );
}
