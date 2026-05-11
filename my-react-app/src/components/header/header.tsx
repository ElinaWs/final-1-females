import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';

interface Props {
    totalCount: number;
    totalPrice: number;
}

export const Header = ({ totalCount, totalPrice }: Props) => {
    const navigate = useNavigate();

    const gohome = () => {
        navigate("/")
    };

    const goAddCosmetic = () => {
        navigate("/cosmetic/create")
    }

    const goBasket = () => {
        navigate("/basket")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ 
                backgroundColor: '#fff', 
                color: '#2D3436', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                padding: '8px 0'
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={gohome}
                    />
                    <Typography variant="h5" component="div" sx={{ 
                        flexGrow: 1, 
                        fontWeight: 600, 
                        letterSpacing: '1px',
                        color: '#E84393' // Rose color for brand
                    }}>
                        COSMETICA
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mr: 3 }}>
                        <Typography variant="body2" sx={{ fontWeight: 300 }}>Items: <b>{totalCount}</b></Typography>
                        <Typography variant="body2" sx={{ fontWeight: 300 }}>Total: <b>{totalPrice} $</b></Typography>
                        <Button color="secondary" variant="contained" onClick={goBasket} sx={{ borderRadius: '20px', textTransform: 'none' }}>Checkout</Button>
                    </Box>
                    <Button color="inherit" onClick={goAddCosmetic} sx={{ textTransform: 'none' }}>Add Product</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};