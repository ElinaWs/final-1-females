import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <Container className="main-container" sx={{ textAlign: 'center', mt: 10 }}>
            <CheckCircleRoundedIcon sx={{ fontSize: 100, color: '#7EB67D', mb: 4 }} />
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Заказ оформлен!</Typography>
            <Typography sx={{ color: '#636E72', mb: 6, fontSize: '1.2rem' }}>
                Спасибо за покупку. Мы уже начали собирать ваш заказ. <br />
                Вы можете отслеживать его в личном кабинете.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button 
                    variant="contained" 
                    className="pill-button" 
                    onClick={() => navigate('/profile')}
                    sx={{ backgroundColor: '#9B7EBD' }}
                >
                    В профиль
                </Button>
                <Button 
                    variant="outlined" 
                    className="pill-button" 
                    onClick={() => navigate('/')}
                    sx={{ color: '#9B7EBD', borderColor: '#9B7EBD' }}
                >
                    На главную
                </Button>
            </Box>
        </Container>
    );
};
