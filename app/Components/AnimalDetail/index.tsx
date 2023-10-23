'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import styles from './AnimalDetail.module.css';

export default function AnimalDetail() {
    const selectedAnimal = useSelector((state: RootState) => state.animals.selectedAnimal);
    if (!selectedAnimal) {
        return null;
    }
    const { image, url, name, text } = selectedAnimal;
    return (
        <div className={styles.animalDetail}>
            <img src={image} alt={`Probably a ${name}`} />
            <p>{url}</p>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
}
