import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { IUser } from "../../types";

interface Props {
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export const Payment = ({ user, setUser }: Props) => {
    const [card, setCard] = useState({
        number: user?.cardDetails?.number || "",
        expiry: user?.cardDetails?.expiry || "",
        cvv: user?.cardDetails?.cvv || ""
    });

    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCard(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        if (user) {
            const updatedUser: IUser = {
                ...user,
                cardDetails: card
            };
            setUser(updatedUser);
            alert("Данные карты сохранены");
            navigate('/profile');
        }
    };

    return (
        <Container className="main-container" sx={{ maxWidth: '500px !important' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>Оплата</Typography>
            <Typography sx={{ color: '#636E72', mb: 4 }}>Введите данные вашей карты для быстрой оплаты заказов.</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Номер карты" name="number" value={card.number} onChange={changeHandler} fullWidth />
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField label="Срок действия" name="expiry" placeholder="MM/YY" value={card.expiry} onChange={changeHandler} fullWidth />
                    <TextField label="CVV" name="cvv" type="password" value={card.cvv} onChange={changeHandler} fullWidth />
                </Box>
                <Button 
                    variant="contained" 
                    className="pill-button" 
                    onClick={submitHandler}
                    sx={{ backgroundColor: '#9B7EBD', py: 1.5 }}
                >
                    Сохранить карту
                </Button>
            </Box>
        </Container>
    );
};
