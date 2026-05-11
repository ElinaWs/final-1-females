import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import AccountCircle from '@mui/icons-material/AccountCircle';


interface Props {
    totalCount: number;
    totalPrice: number;
    onProfileClick: () => void;
}

export const Header = ({ totalCount, totalPrice, onProfileClick }: Props) => {
    const navigate = useNavigate();

    const gohome = () => {
        navigate("/")
    };

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
                    <Typography variant="h4" component="div" sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: '-1px',
                        color: '#9B7EBD'
                    }}>
                        BeautyMarket
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mr: 4 }}>
                        <Button
                            variant="contained"
                            onClick={goBasket}
                            className="pill-button"
                            sx={{ backgroundColor: '#9B7EBD', '&:hover': { backgroundColor: '#8062A3' } }}
                        >
                            Корзина
                        </Button>
                    </Box>
                    <IconButton color="inherit" onClick={onProfileClick}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
};