import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { IUser } from "../../types";

interface Props {
    setUser: (user: IUser) => void;
}

export const Register = ({ setUser }: Props) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    });

    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        const newUser: IUser = {
            name: form.name,
            email: form.email,
            address: form.address,
            phone: form.phone
        };
        setUser(newUser);
        navigate('/');
    };

    return (
        <Container className="main-container" sx={{ maxWidth: '400px !important' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>Регистрация</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Имя" name="name" value={form.name} onChange={changeHandler} fullWidth />
                <TextField label="Email" name="email" value={form.email} onChange={changeHandler} fullWidth />
                <TextField label="Пароль" name="password" type="password" value={form.password} onChange={changeHandler} fullWidth />
                <TextField label="Адрес" name="address" value={form.address} onChange={changeHandler} fullWidth />
                <TextField label="Телефон" name="phone" value={form.phone} onChange={changeHandler} fullWidth />
                <Button 
                    variant="contained" 
                    className="pill-button" 
                    onClick={submitHandler}
                    sx={{ backgroundColor: '#9B7EBD', mt: 2 }}
                >
                    Зарегистрироваться
                </Button>
            </Box>
        </Container>
    );
};
