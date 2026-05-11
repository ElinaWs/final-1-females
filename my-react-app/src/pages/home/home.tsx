import { useCallback, useEffect, useState } from 'react';
import type { ICosmetic, ICosmeticList } from '../../types';
import { axiosApi } from '../../axios';
import { CosmeticCard } from '../../components/cosmeticCard/cosmeticCard';
import styles from "./styles.module.css"
import { Box, Typography } from '@mui/material';
import { centellaProducts, needlyProducts, boutijourProducts, collagenProducts } from '../../data/dataCard';

interface Props {
    addCosmeticToBasket: (cosmetic: ICosmetic) => void;
}

export const Home = ({ addCosmeticToBasket }: Props) => {
    const [cosmetics, setCosmetics] = useState<ICosmetic[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchCosmetics = useCallback(async () => {
        try {
            setLoading(true);
            const cosmeticsResponse = await axiosApi.get<ICosmeticList | null>('/cosmetics.json');
            const cosmetics = cosmeticsResponse.data;

            if (!cosmetics) {
                return;
            }
            const newCosmetics: ICosmetic[] = Object.keys(cosmetics).map(key => {
                const cosmetic = cosmetics[key];
                return {
                    ...cosmetic,
                    id: key,
                };
            });
            setCosmetics(newCosmetics);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchCosmetics()
    }, [fetchCosmetics]);


    return (
        <Box sx={{ pb: 10 }}>
            {/* Hero Banner (Centella) */}
            <Box sx={{ 
                width: '100%', 
                height: '500px', 
                borderRadius: '32px', 
                mb: 6,
                backgroundColor: '#FFD1DC', // Pink placeholder
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h5" color="text.secondary">Баннер (Розовый квадрат)</Typography>
            </Box>

            {/* Section Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>
                    CENTELLA Pink Collection
                </Typography>
                <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>
                    &gt;
                </Typography>
            </Box>

            {/* Product Grid */}
            <div className={styles.wrapper}>
                {
                    centellaProducts.map(cosmetic => (
                        <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                    ))
                }
            </div>

            {/* NEEDLY Section */}
            <Box sx={{ mt: 10 }}>
                <Box sx={{ 
                    width: '100%', 
                    height: '500px', 
                    borderRadius: '32px', 
                    mb: 6,
                    backgroundColor: '#FFD1DC', // Pink placeholder
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h5" color="text.secondary">Баннер NEEDLY (Розовый квадрат)</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>
                        NEEDLY
                    </Typography>
                    <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>
                        &gt;
                    </Typography>
                </Box>

                <div className={styles.wrapper}>
                    {
                        needlyProducts.map(cosmetic => (
                            <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        ))
                    }
                </div>
            </Box>

            {/* LOTUS WATER Section */}
            <Box sx={{ mt: 15, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignItems: 'center' }}>
                <Box>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 1 }}>
                        LOTUS WATER
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: '#2D3436' }}>
                        Anti-Pollution Repairing Toner
                    </Typography>
                    
                    <Typography sx={{ color: '#636E72', mb: 3, lineHeight: 1.8 }}>
                        Деликатный восстанавливающий тонер с экстрактом лотоса, созданный для ежедневной защиты кожи в условиях города. Легкая текстура мгновенно освежает, глубоко увлажняет и помогает восстановить естественный баланс кожи.
                    </Typography>
                    <Box sx={{ borderBottom: '1px solid #DFE6E9', mb: 3 }} />
                    
                    <Typography sx={{ color: '#636E72', mb: 3, lineHeight: 1.8 }}>
                        Формула направлена на нейтрализацию воздействия загрязнений окружающей среды, снижая признаки усталости и укрепление защитного барьера. Кожа становится более гладкой, мягкой и сияющей уже после первых применений.
                    </Typography>
                    <Box sx={{ borderBottom: '1px solid #DFE6E9', mb: 3 }} />
                    
                    <Typography sx={{ color: '#636E72', mb: 3, lineHeight: 1.8 }}>
                        Экстракт Nelumbo Nucifera известен своими успокаивающими и антиоксидантными свойствами, помогая коже выглядеть чистой, свежей и здоровой. Идеально подготавливает кожу к дальнейшему уходу, усиливая действие сывороток и кремов. Подходит для всех типов кожи, включая чувствительную.
                    </Typography>
                </Box>
                
                <Box sx={{ height: '700px', borderRadius: '32px', backgroundColor: '#FFD1DC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Typography variant="h5" color="text.secondary">Изображение (Розовый квадрат)</Typography>
                </Box>
            </Box>

            {/* BOUTIJOUR Section */}
            <Box sx={{ mt: 15 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>
                        BOUTIJOUR
                    </Typography>
                    <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>
                        &gt;
                    </Typography>
                </Box>

                <div className={styles.wrapper}>
                    {
                        boutijourProducts.map(cosmetic => (
                            <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        ))
                    }
                </div>
            </Box>

            {/* COLLAGEN Box Section */}
            <Box sx={{ 
                mt: 15, 
                p: 6,
            }}>
                <Box sx={{ 
                    mb: 4,
                    textAlign: 'center'
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>
                        COLLAGEN &gt;
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, height: '600px' }}>
                    <Box sx={{ backgroundColor: '#FFD1DC', borderRadius: '24px' }} />
                    <Box sx={{ backgroundColor: '#FFD1DC', borderRadius: '24px' }} />
                    <Box sx={{ backgroundColor: '#FFD1DC', borderRadius: '24px' }} />
                    <Box sx={{ backgroundColor: '#FFD1DC', borderRadius: '24px' }} />
                </Box>
            </Box>

            {/* Final Products Grid */}
            <Box sx={{ mt: 10 }}>
                <div className={styles.wrapper}>
                    {
                        collagenProducts.map(cosmetic => (
                            <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        ))
                    }
                </div>
            </Box>
        </Box>
    );
}

export default Home;