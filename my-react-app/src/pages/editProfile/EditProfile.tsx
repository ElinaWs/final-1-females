import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { IUser } from "../../types";

interface Props {
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export const EditProfile = ({ user, setUser }: Props) => {
    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        address: user?.address || "",
        phone: user?.phone || ""
    });

    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        const updatedUser: IUser = {
            ...user!,
            name: form.name,
            email: form.email,
            address: form.address,
            phone: form.phone
        };
        setUser(updatedUser);
        navigate('/profile');
    };

    return (
        <Container className="main-container" sx={{ maxWidth: '500px !important' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>Редактировать профиль</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Имя" name="name" value={form.name} onChange={changeHandler} fullWidth />
                <TextField label="Email" name="email" value={form.email} onChange={changeHandler} fullWidth />
                <TextField label="Адрес" name="address" value={form.address} onChange={changeHandler} fullWidth />
                <TextField label="Телефон" name="phone" value={form.phone} onChange={changeHandler} fullWidth />
                <Button 
                    variant="contained" 
                    className="pill-button" 
                    onClick={submitHandler}
                    sx={{ backgroundColor: '#9B7EBD', py: 1.5 }}
                >
                    Сохранить изменения
                </Button>
            </Box>
        </Container>
    );
};
