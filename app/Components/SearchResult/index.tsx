'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAnimal } from '@/app/GlobalRedux/Features/Animals/AnimalsSlice';
import { RootState } from '../../GlobalRedux/store';
import { Animal } from '@/app/GlobalRedux/Features/Animals/types';
import styles from './SearchResult.module.css';

export default function SearchResult() {
    const { animals } = useSelector((state: RootState) => state.animals);
    const dispatch = useDispatch();

    const handleAnimalSelection = (animal: Animal) => {
        dispatch(setSelectedAnimal(animal));
    };

    return (
        <div className={styles.searchResult}>
            {animals.map((animal, index) => (
                <div key={index} onClick={() => handleAnimalSelection(animal)}>
                    <p className={styles.url}>{animal.url}</p>
                    <h3 className={styles.name}>{animal.name}</h3>
                    <p className={styles.text}>{animal.text}</p>
                </div>
            ))}
        </div>
    );
}
