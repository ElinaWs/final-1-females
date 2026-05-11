import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase, Paper } from '@mui/material';

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
            {/* Top Navigation Bar */}
            <Box sx={{ backgroundColor: '#F8F5F2', py: 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <Typography 
                        variant="h4" 
                        onClick={gohome}
                        sx={{ 
                            fontWeight: 700, 
                            color: '#9B7EBD', 
                            cursor: 'pointer',
                            flex: 1
                        }}
                    >
                        BeautyMarket
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        {['бренды', 'о нас', 'доставка', 'контакты'].map((link) => (
                            <Button key={link} sx={{ color: '#2D3436', textTransform: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
                                {link}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flex: 1 }} />
                </Toolbar>
            </Box>

            {/* Search and Category Bar */}
            <Box sx={{ backgroundColor: '#F0F0F0', py: 2 }}>
                <Toolbar sx={{ gap: 2, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <Button
                        variant="contained"
                        startIcon={<MenuIcon />}
                        sx={{ 
                            backgroundColor: '#fff', 
                            color: '#000', 
                            borderRadius: '50px', 
                            textTransform: 'none',
                            px: 4,
                            py: 1.5,
                            boxShadow: 'none',
                            fontWeight: 600,
                            '&:hover': { backgroundColor: '#f5f5f5', boxShadow: 'none' }
                        }}
                    >
                        Категории
                    </Button>

                    <Paper
                        component="form"
                        sx={{ 
                            p: '2px 4px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            flexGrow: 1, 
                            borderRadius: '50px',
                            boxShadow: 'none',
                            backgroundColor: '#fff',
                            px: 2
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Введите название продукта или бренда"
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton 
                            onClick={onProfileClick}
                            sx={{ backgroundColor: '#fff', '&:hover': { backgroundColor: '#f5f5f5' } }}
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton 
                            onClick={goBasket}
                            sx={{ backgroundColor: '#fff', '&:hover': { backgroundColor: '#f5f5f5' } }}
                        >
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Box>
        </Box>
    )
};