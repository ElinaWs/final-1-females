import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { IUser } from "../../types";
import { SupportBar } from "../../components/supportBar/SupportBar";

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
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', pt: 10, position: 'relative' }}>
            <SupportBar />
            
            <Container sx={{ maxWidth: '450px !important', mt: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 6, textAlign: 'center', fontFamily: 'serif' }}>
                    Создать аккаунт
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <TextField 
                        placeholder="Имя" 
                        name="name" 
                        value={form.name} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fff' } }}
                    />
                    <TextField 
                        placeholder="Email" 
                        name="email" 
                        value={form.email} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fff' } }}
                    />
                    <TextField 
                        placeholder="Пароль" 
                        name="password" 
                        type="password" 
                        value={form.password} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fff' } }}
                    />
                    <TextField 
                        placeholder="Адрес" 
                        name="address" 
                        value={form.address} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fff' } }}
                    />
                    <TextField 
                        placeholder="Телефон" 
                        name="phone" 
                        value={form.phone} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fff' } }}
                    />

                    <Typography align="center" sx={{ color: '#00A8E8', fontWeight: 500, mt: 1 }}>
                        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Уже есть аккаунт? Войти
                        </Link>
                    </Typography>

                    <Button 
                        variant="contained" 
                        onClick={submitHandler}
                        sx={{ 
                            backgroundColor: '#9B7EBD', 
                            borderRadius: '50px', 
                            py: 1.5, 
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            mt: 2,
                            '&:hover': { backgroundColor: '#8062A3' }
                        }}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
