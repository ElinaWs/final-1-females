import { useCallback, useEffect, useState } from 'react';
import type { ICosmetic, ICosmeticList } from '../../types';
import { axiosApi } from '../../axios';
import { CosmeticCard } from '../../components/cosmeticCard/cosmeticCard';
import styles from "./styles.module.css"
import { Box, Typography } from '@mui/material';

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
        <div className="main-container">
            <Box sx={{ mb: 8 }}>
                <Typography variant={"h4"} sx={{ fontWeight: 700, color: '#000000', mb: 3, letterSpacing: '-1px' }}>
                    Рекомендации для вас
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2 }}>
                    {cosmetics.slice(0, 3).map(cosmetic => (
                        <Box key={cosmetic.id} sx={{ minWidth: '280px' }}>
                            <CosmeticCard cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Typography variant={"h3"} sx={{ fontWeight: 700, color: '#000000', mb: 1, letterSpacing: '-1.5px' }}>
                Каталог
            </Typography>
            <Typography variant={"body1"} sx={{ color: '#636E72', mb: 6, maxWidth: '600px', fontSize: '1.1rem' }}>
                Погрузитесь в мир красоты с нашей эксклюзивной коллекцией уходовой и декоративной косметики.
            </Typography>
            <div className={styles.wrapper}>
                {
                    cosmetics.map(cosmetic => (
                        <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;