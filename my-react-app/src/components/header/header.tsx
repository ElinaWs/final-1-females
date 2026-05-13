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
import { InputBase, Paper, Menu, MenuItem, Checkbox, ListItemText, Badge } from '@mui/material';
import type { SkinTone } from '../../types';
import { useState } from 'react';

interface Props {
    totalCount: number;
    totalPrice: number;
    onProfileClick: () => void;
    searchValue: string;
    onSearchChange: (value: string) => void;
    selectedSkinTones: SkinTone[];
    onSkinTonesChange: (tones: SkinTone[]) => void;
}

export const Header = ({ totalCount, totalPrice, onProfileClick, searchValue, onSearchChange, selectedSkinTones, onSkinTonesChange }: Props) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleToneClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggleTone = (tone: SkinTone) => {
        const newTones = selectedSkinTones.includes(tone)
            ? selectedSkinTones.filter(t => t !== tone)
            : [...selectedSkinTones, tone];
        onSkinTonesChange(newTones);
    };

    const skinTones: { value: SkinTone; label: string }[] = [
        { value: 'light', label: 'светлый' },
        { value: 'tanned', label: 'смуглый' },
        { value: 'dark', label: 'темный' }
    ];

    const gohome = () => {
        navigate("/")
    };

    const goBasket = () => {
        navigate("/basket")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
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

            <Box sx={{ backgroundColor: '#F0F0F0', py: 2 }}>
                <Toolbar sx={{ gap: 2, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <Button
                        variant="contained"
                        onClick={handleToneClick}
                        startIcon={<MenuIcon />}
                        sx={{ 
                            backgroundColor: '#fff', 
                            color: '#000', 
                            borderRadius: '50px', 
                            textTransform: 'none',
                            px: 3,
                            py: 1.5,
                            boxShadow: 'none',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            '&:hover': { backgroundColor: '#f5f5f5', boxShadow: 'none' }
                        }}
                    >
                        Категории {selectedSkinTones.length > 0 && `(${selectedSkinTones.length})`}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                sx: {
                                    borderRadius: '16px',
                                    mt: 1,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }
                            }
                        }}
                    >
                        {skinTones.map((tone) => (
                            <MenuItem key={tone.value} onClick={() => handleToggleTone(tone.value)}>
                                <Checkbox checked={selectedSkinTones.includes(tone.value)} />
                                <ListItemText primary={tone.label} />
                            </MenuItem>
                        ))}
                    </Menu>

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
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                onClick={goBasket}
                                sx={{ backgroundColor: '#fff', '&:hover': { backgroundColor: '#f5f5f5' } }}
                            >
                                <Badge badgeContent={totalCount} color="secondary">
                                    <ShoppingBasketIcon />
                                </Badge>
                            </IconButton>
                            {totalPrice > 0 && (
                                <Typography sx={{ fontWeight: 700, color: '#2D3436', ml: 1 }}>
                                    {totalPrice} С
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </Box>
        </Box>
    )
};
