import { Container, Typography, Box } from "@mui/material";

export const Wishlist = () => {
    return (
        <Container className="main-container">
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>Избранное</Typography>
            <Box sx={{ p: 10, textAlign: 'center', backgroundColor: '#fff', borderRadius: '32px' }}>
                <Typography color="text.secondary">У вас пока нет избранных товаров.</Typography>
            </Box>
        </Container>
    );
};
