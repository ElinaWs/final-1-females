import styles from './styles.module.css'
import { Button, TextField } from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { ICosmeticShort } from '../../types';

const INITIAL_FORM_STATE: ICosmeticShort = {
    name: '',
    description: '',
    price: 0
}

interface Props {
    onSubmit: (cosmetic: ICosmeticShort) => void
    loading: boolean
};

const CosmeticForm = ({ onSubmit, loading }: Props) => {
    const [formState, setFormState] = useState<ICosmeticShort>(INITIAL_FORM_STATE)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit(formState)
    }


    return (
        <form className={styles.form} onSubmit={onFormSubmit}>
            <TextField
                label={'Cosmetic name'}
                value={formState.name}
                name={'name'}
                onChange={inputChangeHandler}
            />
            <TextField
                label={'Description'}
                value={formState.description}
                name={'description'}
                onChange={inputChangeHandler}
            />
            <TextField
                label={'Price'}
                value={formState.price}
                name={'price'}
                type={'number'}
                onChange={inputChangeHandler}
            />
            <Button loading={loading}
                type={'submit'}
                variant={'contained'}>
                Add Cosmetic
            </Button>
        </form>
    );
};

export default CosmeticForm;