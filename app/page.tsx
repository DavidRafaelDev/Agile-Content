/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchAnimals, clearResults } from './GlobalRedux/Features/Animals/AnimalsSlice';
import { RootState } from './GlobalRedux/store';
import SearchResult from './Components/SearchResult';
import AnimalDetail from './Components/AnimalDetail';
import GoogleLogo from './Components/GoogleLogo';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GrApps } from "@react-icons/all-files/gr/GrApps";
import styles from './page.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { animals } = useSelector((state: RootState) => state.animals);
  function loadMoreResults() {
    dispatch(searchAnimals(inputValue));
  };
  function doPesquisar() {
    dispatch(clearResults())
    dispatch(searchAnimals(inputValue));
    setSearch(inputValue);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      doPesquisar();
    }
  }
  return (
    <main className={styles.main}>
      {animals.length === 0 ? (
        <div className={styles.headerWithoutResult}>
          <span><b>Agile Content</b> frontend test </span>
          <span><GrApps /></span>
        </div >

      ) : (
        <div className={styles.headerWithResult}>
          <GoogleLogo />
          <input className={styles.inputWithResult}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Search an Animal'
            onKeyDown={e => handleKeyDown(e)} />
        </div>
      )}
      {
        animals.length < 1 && (
          <div className={styles.logoInput}>
            <GoogleLogo />
            <input className={styles.inputWithResult}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder='Search an Animal'
              onKeyDown={e => handleKeyDown(e)} />
            <button onClick={doPesquisar} className={styles.button}>Search</button>
          </div>

        )
      }
      {
        animals.length > 1 ? (
          <div className={styles.searchResultContainer}>
            <div className={styles.searchResult}>
              <InfiniteScroll
                dataLength={animals.length}
                next={loadMoreResults}
                hasMore={animals.length > 1}
                loader={<h4>Carregando...</h4>}
              >
                <SearchResult />
              </InfiniteScroll>
            </div>
            <div>
              <AnimalDetail />
            </div>
          </div>
        ) : animals.length === 1 && (
          <div className={styles.notFound}>
            {search.length > 0 && (
              <>
                <p>No results for <b>'{search}'.</b> </p>
              </>
            )}
            <p>Try looking for <b>insect, fish, horse, crocodile, bear, cataclean, cow, lion, rabbit, cat, snake, dog, bird</b></p>
          </div>
        )
      }
      <footer className={styles.footer}>
        <span><b>@David Moura</b></span>
        <span>Version: 0.0.1</span>
      </footer>
    </main >
  );
}
