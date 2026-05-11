import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { IUser } from "../../types";
import { SupportBar } from "../../components/supportBar/SupportBar";

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
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', pt: 10, position: 'relative' }}>
            <SupportBar />
            
            <Container sx={{ maxWidth: '450px !important', mt: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 6, textAlign: 'center', fontFamily: 'serif' }}>
                    Войти в аккаунт
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField 
                        placeholder="Email" 
                        name="email" 
                        value={form.email} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ 
                            '& .MuiOutlinedInput-root': { 
                                borderRadius: '12px',
                                backgroundColor: '#fff'
                            }
                        }}
                    />
                    <TextField 
                        placeholder="Пароль" 
                        name="password" 
                        type="password" 
                        value={form.password} 
                        onChange={changeHandler} 
                        fullWidth
                        sx={{ 
                            '& .MuiOutlinedInput-root': { 
                                borderRadius: '12px',
                                backgroundColor: '#fff'
                            }
                        }}
                    />
                    
                    <Box sx={{ textAlign: 'left', mb: 1 }}>
                        <Typography sx={{ cursor: 'pointer', color: '#2D3436', fontWeight: 500, fontSize: '0.9rem' }}>
                            Забыли пароль?
                        </Typography>
                    </Box>

                    <Typography align="center" sx={{ color: '#00A8E8', fontWeight: 500 }}>
                        <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Нет аккаунта? Зарегистрироваться
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
                        Войти
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
