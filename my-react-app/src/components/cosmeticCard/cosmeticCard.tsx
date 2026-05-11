import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import type { ICosmetic } from '../../types';
import { Button, Typography } from '@mui/material';
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

    const goToEditPage = (id: string) => {
        navigate(`/cosmetic/edit/${id}`)
    }
    return (
        <Card className='premium-card'>
            <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2D3436' }}>
                    {cosmetic.name}
                </Typography>
                <Typography variant='h5' sx={{ color: '#E84393', fontWeight: 600, mb: 2 }}>
                    {cosmetic.price} $
                </Typography>

                <CardActions sx={{ p: 0, justifyContent: 'space-between' }}>
                    <Button 
                        size="small" 
                        onClick={() => goToCosmeticPage(cosmetic.id)}
                        sx={{ color: '#636E72', textTransform: 'none' }}
                    >
                        Details
                    </Button>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={() => addCosmeticToBasket(cosmetic)}
                            sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 'none' }}
                        >
                            Add
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => goToEditPage(cosmetic.id)}
                            sx={{ borderRadius: '8px', textTransform: 'none', color: '#636E72', borderColor: '#DFE6E9' }}
                        >
                            Edit
                        </Button>
                    </Box>
                </CardActions>
            </CardContent>
        </Card>
    )
}