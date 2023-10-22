'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import { Animal, setSelectedAnimal } from '@/app/GlobalRedux/Features/Animals/AnimalsSlice';
export default function SearchResult() {
    const { animals } = useSelector((state: RootState) => state.animals);
    const dispatch = useDispatch();

    function selectAnimal(animal: Animal) {
        dispatch(setSelectedAnimal(animal))
    }

    return (
        <div>
            {
                animals.map((animal, index) => (
                    <div key={index} onClick={() => selectAnimal(animal)}>
                        <p>{animal.url}</p>
                        <h2>{animal.name}</h2>
                        <p>{animal.text}</p>
                    </div>
                ))
            }
        </div >
    )
}
