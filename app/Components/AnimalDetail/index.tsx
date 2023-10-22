'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import { Animal } from '@/app/GlobalRedux/Features/Animals/AnimalsSlice';
export default function AnimalDetail() {
    const selectedAnimal = useSelector((state: RootState) => state.animals.selectedAnimal);

    return (
        <div>
            {selectedAnimal && (
                <>
                    <img src={selectedAnimal.image} alt="proprably a cat" />
                    <p>{selectedAnimal?.url}</p>
                    <h3>{selectedAnimal?.name}</h3>
                    <p>{selectedAnimal?.text}</p>

                </>
            )}
        </div >
    )
}