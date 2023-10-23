'use client';
import React from 'react';
import styles from './googleLogo.module.css';

export default function GoogleLogo() {
    const letters = ['G', 'o', 'o', 'g', 'l', 'e'];
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#4285F4', '#0F9D58', '#F4B400'];

    return (
        <div className={styles.googleLogo}>
            {letters.map((letter, index) => (
                <span key={index} style={{ color: colors[index] }}>
                    {letter}
                </span>
            ))}
        </div>
    );
}

