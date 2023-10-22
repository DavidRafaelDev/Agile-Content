'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

export interface Animal {
    name: string;
    text: string;
    url: string;
    image: string;
}


export interface AnimalsState {
    animals: Animal[];
    selectedAnimal: Animal | null;
}

export const initialState: AnimalsState = {
    animals: [],
    selectedAnimal: null,
};

export const AnimalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        searchAnimals: (state, action: PayloadAction<string>) => {
            const animalType = action.payload;
            const fakerFunction = faker.animal[animalType]
            if (fakerFunction) {
                for (let i = 0; i < 20; i++) {
                    state.animals.push({
                        name: fakerFunction(),
                        text: faker.lorem.sentences(),
                        url: faker.internet.url(),
                        image: faker.image.animals(644, 362, true)
                    });
                }
            } else {
                state.animals.length = 0;
                state.animals.push({ name: 'Animal não encontrado', text: '', url: '', image: '' });
            }
        },
        clearResults: (state) => {
            state.animals.length = 0;
            state.animals = [];
            state.selectedAnimal = null
        },
        setSelectedAnimal: (state, action: PayloadAction<Animal | null>) => {
            state.selectedAnimal = action.payload;
        }
    }
});

export const { searchAnimals, clearResults, setSelectedAnimal } = AnimalsSlice.actions;
export default AnimalsSlice.reducer;
