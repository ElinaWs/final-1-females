import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export const AddCard = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        cardNumber: "",
        cvv: "",
        name: "",
        expiry: ""
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        if (name === "cardNumber") {
            const digits = value.replace(/\D/g, "").substring(0, 16);
            const groups = digits.match(/.{1,4}/g);
            setForm(prev => ({ ...prev, [name]: groups ? groups.join(" ") : "" }));
            return;
        }

        if (name === "cvv") {
            const digits = value.replace(/\D/g, "").substring(0, 3);
            setForm(prev => ({ ...prev, [name]: digits }));
            return;
        }

        if (name === "name") {
            const letters = value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
            setForm(prev => ({ ...prev, [name]: letters }));
            return;
        }

        if (name === "expiry") {
            let digits = value.replace(/\D/g, "").substring(0, 4);
            if (digits.length > 2) {
                digits = digits.substring(0, 2) + "/" + digits.substring(2);
            }
            setForm(prev => ({ ...prev, [name]: digits }));
            return;
        }

        setForm(prev => ({ ...prev, [name]: value }));
    };

    const submitHandler = () => {
        // Mock save
        alert("Карта успешно привязана!");
        navigate('/profile');
    };

    return (
        <Container sx={{ py: 10, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 2 }}>
                Привязать карту
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 6 }}>
                Ваши банковские данные
            </Typography>

            <Box sx={{ maxWidth: '700px', margin: '0 auto' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, mb: 6 }}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>Номер карты</Typography>
                        <TextField 
                            placeholder="4000 3000 4000 3000" 
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={changeHandler}
                            fullWidth
                            sx={{ 
                                '& .MuiOutlinedInput-root': { 
                                    borderRadius: '12px', 
                                    backgroundColor: '#fff',
                                    '& fieldset': { borderColor: '#8DC63F' },
                                    '&:hover fieldset': { borderColor: '#8DC63F' },
                                    '&.Mui-focused fieldset': { borderColor: '#8DC63F' }
                                } 
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>CVV</Typography>
                        <TextField 
                            placeholder="***" 
                            name="cvv"
                            type="password"
                            value={form.cvv}
                            onChange={changeHandler}
                            fullWidth
                            sx={{ 
                                '& .MuiOutlinedInput-root': { 
                                    borderRadius: '12px', 
                                    backgroundColor: '#fff',
                                    '& fieldset': { borderColor: '#8DC63F' },
                                    '&:hover fieldset': { borderColor: '#8DC63F' },
                                    '&.Mui-focused fieldset': { borderColor: '#8DC63F' }
                                } 
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>Имя</Typography>
                        <TextField 
                            placeholder="Maria Ivanova" 
                            name="name"
                            value={form.name}
                            onChange={changeHandler}
                            fullWidth
                            sx={{ 
                                '& .MuiOutlinedInput-root': { 
                                    borderRadius: '12px', 
                                    backgroundColor: '#fff',
                                    '& fieldset': { borderColor: '#8DC63F' },
                                    '&:hover fieldset': { borderColor: '#8DC63F' },
                                    '&.Mui-focused fieldset': { borderColor: '#8DC63F' }
                                } 
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>Срок действия</Typography>
                        <TextField 
                            placeholder="21/28" 
                            name="expiry"
                            value={form.expiry}
                            onChange={changeHandler}
                            fullWidth
                            sx={{ 
                                '& .MuiOutlinedInput-root': { 
                                    borderRadius: '12px', 
                                    backgroundColor: '#fff',
                                    '& fieldset': { borderColor: '#8DC63F' },
                                    '&:hover fieldset': { borderColor: '#8DC63F' },
                                    '&.Mui-focused fieldset': { borderColor: '#8DC63F' }
                                } 
                            }}
                        />
                    </Box>
                </Box>

                <Button 
                    variant="contained" 
                    onClick={submitHandler}
                    sx={{ 
                        backgroundColor: '#8DC63F', 
                        color: '#000',
                        fontWeight: 600,
                        textTransform: 'none',
                        px: 6,
                        py: 1,
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        '&:hover': { backgroundColor: '#7db336' }
                    }}
                >
                    сохранить карту
                </Button>
            </Box>
        </Container>
    );
};
