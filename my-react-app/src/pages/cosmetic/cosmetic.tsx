import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { axiosApi } from '../../axios';
import type { ICosmetic } from '../../types';

interface Props {
    addCosmeticToBasket: (cosmetic: ICosmetic) => void;
}

export const Cosmetic = ({ addCosmeticToBasket }: Props) => {
    const { id } = useParams<{ id: string }>();
    const [cosmetic, setCosmetic] = useState<ICosmetic | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCosmetic = async () => {
            try {
                setLoading(true);
                const response = await axiosApi.get(`/cosmetics/${id}.json`);
                if (response.data) {
                    setCosmetic({ ...response.data, id });
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchCosmetic();
    }, [id]);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
    if (!cosmetic) return <Typography align="center" sx={{ mt: 10 }}>Товар не найден</Typography>;

    return (
        <Container className="main-container">
            <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 6 }}>
                <Box sx={{ backgroundColor: '#FFD1DC', borderRadius: '32px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                
                <Box>
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>{cosmetic.name}</Typography>
                    <Typography variant="h4" sx={{ color: '#9B7EBD', fontWeight: 700, mb: 4 }}>{cosmetic.price} сом</Typography>
                    
                    <Button 
                        variant="contained" 
                        size="large" 
                        className="pill-button"
                        onClick={() => addCosmeticToBasket(cosmetic)}
                        sx={{ backgroundColor: '#9B7EBD', mb: 6, width: '100%', py: 2 }}
                    >
                        В корзину
                    </Button>

                    <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 600 }}>Описание</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">{cosmetic.description || "Великолепное средство для вашей кожи, обеспечивающее глубокое увлажнение и сияние."}</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 600 }}>Состав</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">Aqua, Glycerin, Hyaluronic Acid, Vitamin E, Plant Extracts, Natural Oils.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, borderBottom: '1px solid #DFE6E9' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 600 }}>Отзывы</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ mb: 2 }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Анна К.</Typography>
                                <Typography variant="body2" color="text.secondary">Очень понравилось! Кожа стала нежной и гладкой.</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Мария П.</Typography>
                                <Typography variant="body2" color="text.secondary">Пользуюсь неделю, результат заметен. Рекомендую!</Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Container>
    );
}