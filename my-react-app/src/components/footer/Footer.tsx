import { Box, Container, Typography, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', borderTop: '1px solid #DFE6E9', py: 8, mt: 10 }}>
            <Container maxWidth={false} sx={{ maxWidth: '1400px', margin: '0 auto', px: 4 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>контакты</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>+996 000 000 000</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>+996 000 000 000</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#2D3436' }}>BeautyMarket@gmail.com</Typography>
                    </Box>
                    
                    <Box sx={{ textAlign: { md: 'right' } }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Нас можно найти здесь</Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { md: 'flex-end' } }}>
                            <IconButton sx={{ color: '#000' }}><InstagramIcon /></IconButton>
                            <IconButton sx={{ color: '#000' }}><FacebookIcon /></IconButton>
                            <IconButton sx={{ color: '#000' }}><XIcon /></IconButton>
                            <IconButton sx={{ color: '#000' }}><TelegramIcon /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
