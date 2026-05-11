import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { IUser } from "../../types";

interface Props {
    setUser: (user: IUser) => void;
}

export const Login = ({ setUser }: Props) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        // Mock login
        const mockUser: IUser = {
            name: "Пользователь",
            email: form.email,
            address: "г. Бишкек, ул. Чуй 100",
            phone: "+996 555 123456"
        };
        setUser(mockUser);
        navigate('/');
    };

    return (
        <Container className="main-container" sx={{ maxWidth: '400px !important' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>Вход</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email" name="email" value={form.email} onChange={changeHandler} fullWidth />
                <TextField label="Пароль" name="password" type="password" value={form.password} onChange={changeHandler} fullWidth />
                <Button 
                    variant="contained" 
                    className="pill-button" 
                    onClick={submitHandler}
                    sx={{ backgroundColor: '#9B7EBD', mt: 2 }}
                >
                    Войти
                </Button>
                <Typography align="center" sx={{ mt: 2 }}>
                    Нет аккаунта? <Link to="/register" style={{ color: '#9B7EBD', fontWeight: 600, textDecoration: 'none' }}>Зарегистрироваться</Link>
                </Typography>
            </Box>
        </Container>
    );
};
