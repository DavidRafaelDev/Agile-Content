'use client';
import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './Features/Animals/AnimalsSlice';

export const store = configureStore({
    reducer: {
        animals: animalsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;