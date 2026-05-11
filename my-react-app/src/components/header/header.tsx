import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';

export const Header = () => {
    const navigate = useNavigate();

    const gohome = () => {
        navigate("/")
    };

    const goAddCosmetic = () => {
        navigate("/cosmetic/create")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={gohome}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cosmetics
                    </Typography>
                    <Button color="inherit" onClick={goAddCosmetic}>Add Cosmetic</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};