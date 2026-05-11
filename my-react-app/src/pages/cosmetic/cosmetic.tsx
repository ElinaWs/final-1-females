import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import type { ICosmetic } from '../../types';
import * as allData from '../../data/dataCard';

interface Props {
    addCosmeticToBasket: (cosmetic: ICosmetic) => void;
}

export const Cosmetic = ({ addCosmeticToBasket }: Props) => {
    const { id } = useParams<{ id: string }>();
    const [cosmetic, setCosmetic] = useState<ICosmetic | null>(null);
    const [selectedVolume, setSelectedVolume] = useState('150 мл');

    useEffect(() => {
        // Flatten all product lists to find the one with the matching ID
        const allProducts = [
            ...allData.centellaProducts,
            ...allData.needlyProducts,
            ...allData.boutijourProducts,
            ...allData.collagenProducts
        ];
        const found = allProducts.find(p => p.id === id);
        if (found) {
            setCosmetic(found);
        }
    }, [id]);

    if (!cosmetic) return <Typography align="center" sx={{ mt: 10 }}>Товар не найден</Typography>;

    const volumes = ['150 мл', '100 мл', '60 мл'];

    return (
        <Container maxWidth={false} sx={{ maxWidth: '1400px', py: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, mb: 6, fontFamily: 'serif' }}>
                BOUTIJOUR
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1.2fr' }, gap: 8, mb: 10 }}>
                {/* Product Image */}
                <Box sx={{ 
                    backgroundColor: '#FFD1DC', 
                    borderRadius: '24px', 
                    height: '600px', 
                    width: '100%' 
                }} />
                
                <Box sx={{ pt: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>{cosmetic.name}</Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ display: 'flex', color: '#FFD700', mr: 1 }}>
                            {[...Array(5)].map((_, i) => <StarIcon key={i} fontSize="small" />)}
                        </Box>
                        <Typography color="text.secondary" sx={{ fontSize: '0.9rem' }}>&gt; 129 отзывов</Typography>
                    </Box>

                    <Typography sx={{ color: '#636E72', mb: 6, lineHeight: 1.8, fontSize: '1.1rem' }}>
                        {cosmetic.description || "Деликатный восстанавливающий тонер с экстрактом лотоса, созданный для ежедневной защиты кожи в условиях города. Легкая текстура мгновенно освежает, глубоко увлажняет и помогает восстановить естественный баланс кожи."}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, mb: 8 }}>
                        {volumes.map(v => (
                            <Box 
                                key={v}
                                onClick={() => setSelectedVolume(v)}
                                sx={{ 
                                    px: 2, py: 1, 
                                    border: '1px solid #DFE6E9', 
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedVolume === v ? '#F0F0F0' : 'transparent',
                                    fontWeight: 500
                                }}
                            >
                                {v}
                            </Box>
                        ))}
                    </Box>

                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>{cosmetic.price} С</Typography>
                    
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                backgroundColor: '#9B7EBD', 
                                borderRadius: '12px', 
                                px: 6, py: 1.5, 
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                '&:hover': { backgroundColor: '#8062A3' }
                            }}
                        >
                            купить
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => addCosmeticToBasket(cosmetic)}
                            sx={{ 
                                color: '#000', 
                                borderColor: '#DFE6E9',
                                borderRadius: '12px', 
                                px: 6, py: 1.5, 
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                '&:hover': { borderColor: '#9B7EBD' }
                            }}
                        >
                            в корзину
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Collapsible Sections */}
            <Box sx={{ mt: 10 }}>
                <Accordion sx={{ boxShadow: 'none', backgroundColor: 'transparent', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>Описание</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: '#636E72', lineHeight: 1.8 }}>
                            {cosmetic.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: 'none', backgroundColor: 'transparent', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>Состав</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: '#636E72', lineHeight: 1.8 }}>
                            {cosmetic.ingredients || "Aqua, Glycerin, Natural Extracts."}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: 'none', backgroundColor: 'transparent', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>Отзывы</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {cosmetic.reviews?.map((review, i) => (
                            <Box key={i} sx={{ mb: 4, display: 'flex', gap: 2 }}>
                                <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#9B7EBD', opacity: 0.5 }} />
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography sx={{ fontWeight: 600, mr: 2 }}>{review.userName}</Typography>
                                        <Box sx={{ display: 'flex', color: '#FFD700' }}>
                                            {[...Array(5)].map((_, j) => (
                                                <StarIcon key={j} sx={{ fontSize: '1rem', color: j < review.stars ? '#FFD700' : '#DFE6E9' }} />
                                            ))}
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: '#636E72', fontSize: '0.9rem' }}>
                                        {review.text}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Button variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', color: '#2D3436', borderColor: '#B2BEC3', mt: 2 }}>
                            Смотреть еще
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}