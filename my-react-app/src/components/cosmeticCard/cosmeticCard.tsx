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
        <Card 
            onClick={() => goToCosmeticPage(cosmetic.id)}
            sx={{ 
                borderRadius: '24px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)', 
                border: 'none',
                backgroundColor: '#fff',
                overflow: 'hidden',
                p: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
            }}
        >
            <Box sx={{ 
                height: '220px', 
                backgroundColor: '#FFD1DC', // Pink placeholder
                borderRadius: '16px', 
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                 {/* Pink placeholder for image */}
            </Box>
            
            <CardContent sx={{ p: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#2D3436', height: '40px', overflow: 'hidden' }}>
                    {cosmetic.name}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {cosmetic.price} С
                    </Typography>
                    
                    <Button 
                        variant="outlined" 
                        size="small"
                        onClick={(e) => {
                            e.stopPropagation();
                            addCosmeticToBasket(cosmetic);
                        }}
                        sx={{ 
                            borderRadius: '50px', 
                            textTransform: 'none', 
                            color: '#2D3436', 
                            borderColor: '#DFE6E9',
                            fontSize: '0.75rem',
                            px: 2,
                            '&:hover': { borderColor: '#9B7EBD', color: '#9B7EBD' }
                        }}
                    >
                        в корзину
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}