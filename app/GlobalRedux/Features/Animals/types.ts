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