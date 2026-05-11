import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import type { ICosmetic } from '../../types';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

interface Props {
    cosmetic: ICosmetic;
    addCosmeticToBasket: (cosmetic: ICosmetic) => void;
}

export const CosmeticCard = ({ cosmetic, addCosmeticToBasket }: Props) => {
    const navigate = useNavigate();

    const goToCosmeticPage = (id: string) => {
        navigate(`/cosmetic/${id}`)
    }

    return (
        <Card className='premium-card'>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#000000' }}>
                    {cosmetic.name}
                </Typography>
                <Typography variant='h5' sx={{ color: '#9B7EBD', fontWeight: 700, mb: 3 }}>
                    {cosmetic.price} сом
                </Typography>

                <CardActions sx={{ p: 0, justifyContent: 'space-between' }}>
                    <Button 
                        size="small" 
                        onClick={() => goToCosmeticPage(cosmetic.id)}
                        sx={{ color: '#9B7EBD', textTransform: 'none', fontWeight: 600 }}
                    >
                        Подробнее
                    </Button>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Button 
                            variant="contained" 
                            className="pill-button"
                            onClick={() => addCosmeticToBasket(cosmetic)}
                            sx={{ backgroundColor: '#9B7EBD', '&:hover': { backgroundColor: '#8062A3' } }}
                        >
                            В корзину
                        </Button>
                    </Box>
                </CardActions>
            </CardContent>
        </Card>
    )
}