import { useCallback, useEffect, useState } from 'react';
import type { ICosmetic, ICosmeticList } from '../../types';
import { axiosApi } from '../../axios';
import { CosmeticCard } from '../../components/cosmeticCard/cosmeticCard';
import styles from "./styles.module.css"
import { Typography } from '@mui/material';

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
        <div>
            <Typography variant={"h4"} sx={{ fontWeight: 600, color: '#2D3436', mb: 2 }}>
                Our Collection
            </Typography>
            <Typography variant={"body1"} sx={{ color: '#636E72', mb: 4 }}>
                Discover our curated selection of premium beauty products.
            </Typography>
            <div className={styles.wrapper}>
                {
                    cosmetics.map((cosmeticItem) => (
                        <CosmeticCard cosmetic={cosmeticItem} key={cosmeticItem.id} addCosmeticToBasket={addCosmeticToBasket} />
                    ))
                }
            </div>
        </div>

    );
};

export default Home;