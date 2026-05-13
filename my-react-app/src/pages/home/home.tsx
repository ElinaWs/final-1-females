import type { ICosmetic, SkinTone } from '../../types';
import { CosmeticCard } from '../../components/cosmeticCard/cosmeticCard';
import styles from "./styles.module.css"
import { Box, Typography } from '@mui/material';
import { centellaProducts, needlyProducts, boutijourProducts, collagenProducts } from '../../data/dataCard';

interface Props {
    addCosmeticToBasket: (cosmetic: ICosmetic) => void;
    searchValue: string;
    selectedSkinTones: SkinTone[];
}

export const Home = ({ addCosmeticToBasket, searchValue, selectedSkinTones }: Props) => {
    const allProducts = [
        ...centellaProducts,
        ...needlyProducts,
        ...boutijourProducts,
        ...collagenProducts
    ];

    const filterProducts = (products: ICosmetic[]) => {
        return products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchValue.toLowerCase());
            const matchesTone = selectedSkinTones.length === 0 || (p.skinTone && selectedSkinTones.includes(p.skinTone));
            return matchesSearch && matchesTone;
        });
    }

    const filteredAll = filterProducts(allProducts);
    const isSearching = searchValue.trim() !== '';

    return (
        <Box sx={{ pb: 10 }}>
            {!isSearching && (
                <Box sx={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '32px',
                    mb: 6,
                    backgroundColor: '#FFD1DC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} />
            )}

            {isSearching ? (
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 4 }}>
                        Результаты поиска ({filteredAll.length})
                    </Typography>
                    <div className={styles.wrapper}>
                        {filteredAll.map(cosmetic => (
                            <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        ))}
                    </div>
                    {filteredAll.length === 0 && (
                        <Typography align="center" sx={{ mt: 10, color: '#636E72' }}>
                            Ничего не найдено по вашему запросу
                        </Typography>
                    )}
                </Box>
            ) : (
                <>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>
                            CENTELLA Pink Collection
                        </Typography>
                        <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>&gt;</Typography>
                    </Box>
                    <div className={styles.wrapper}>
                        {filterProducts(centellaProducts).map(cosmetic => (
                            <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                        ))}
                    </div>

                    <Box sx={{ mt: 10 }}>
                        <Box sx={{ width: '100%', height: '500px', borderRadius: '32px', mb: 6, backgroundColor: '#FFD1DC' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>NEEDLY</Typography>
                            <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>&gt;</Typography>
                        </Box>
                        <div className={styles.wrapper}>
                            {filterProducts(needlyProducts).map(cosmetic => (
                                <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                            ))}
                        </div>
                    </Box>

                    <Box sx={{ mt: 15, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 1 }}>LOTUS WATER</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: '#2D3436' }}>Anti-Pollution Repairing Toner</Typography>
                            <Typography sx={{ color: '#636E72', mb: 3, lineHeight: 1.8 }}>
                                Деликатный восстанавливающий тонер с экстрактом лотоса...
                            </Typography>
                        </Box>
                        <Box sx={{ height: '700px', borderRadius: '32px', backgroundColor: '#FFD1DC' }} />
                    </Box>

                    <Box sx={{ mt: 15 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, cursor: 'pointer' }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>BOUTIJOUR</Typography>
                            <Typography variant="h4" sx={{ ml: 2, fontWeight: 300 }}>&gt;</Typography>
                        </Box>
                        <div className={styles.wrapper}>
                            {filterProducts(boutijourProducts).map(cosmetic => (
                                <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                            ))}
                        </div>
                    </Box>

                    <Box sx={{ mt: 15 }}>
                        <Box sx={{ mb: 4, textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif' }}>COLLAGEN &gt;</Typography>
                        </Box>
                        <div className={styles.wrapper}>
                            {filterProducts(collagenProducts).map(cosmetic => (
                                <CosmeticCard key={cosmetic.id} cosmetic={cosmetic} addCosmeticToBasket={addCosmeticToBasket} />
                            ))}
                        </div>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Home;