import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router";
import type { IUser, IOrder, ICosmetic } from "../../types";
import { CosmeticCard } from "../../components/cosmeticCard/cosmeticCard";
import styles from "../home/styles.module.css"; // Reuse grid styles

interface Props {
    user: IUser | null;
    orders: IOrder[];
    onOrderAgain: (cosmetic: ICosmetic) => void;
}

export const Profile = ({ user, orders, onOrderAgain }: Props) => {
    const navigate = useNavigate();

    if (!user) {
        return (
            <Container className="main-container" sx={{ textAlign: 'center', py: 10 }}>
                <Typography variant="h4" sx={{ mb: 4, fontFamily: 'serif' }}>Пожалуйста, авторизуйтесь</Typography>
                <Button 
                    variant="contained" 
                    onClick={() => navigate('/login')}
                    sx={{ backgroundColor: '#9B7EBD', borderRadius: '50px', px: 4 }}
                >
                    Перейти к входу
                </Button>
            </Container>
        );
    }

    const activeOrders = orders.filter(o => o.status === 'in-transit');
    
    // Get unique products from all orders for the "ordered before" section
    const orderedBefore = Array.from(new Set(orders.flatMap(o => o.items).map(item => item.cosmetic.id)))
        .map(id => orders.flatMap(o => o.items).find(item => item.cosmetic.id === id)?.cosmetic)
        .filter((c): c is ICosmetic => c !== undefined);

    return (
        <Box sx={{ pb: 10 }}>
            {/* User Info Header */}
            <Paper sx={{ 
                p: 4, 
                borderRadius: '32px', 
                backgroundColor: '#fff', 
                boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
                mb: 8,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            }}>
                <Box>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 1 }}>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#636E72', mb: 2 }}>{user.email}</Typography>
                    
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontWeight: 600 }}>Телефон: <Box component="span" sx={{ fontWeight: 400, ml: 1 }}>{user.phone}</Box></Typography>
                        <Typography sx={{ fontWeight: 600 }}>Адрес: <Box component="span" sx={{ fontWeight: 400, ml: 1 }}>{user.address}</Box></Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                        variant="outlined" 
                        onClick={() => navigate('/add-card')}
                        sx={{ 
                            borderRadius: '50px', 
                            textTransform: 'none', 
                            color: '#9B7EBD', 
                            borderColor: '#9B7EBD',
                            px: 4,
                            '&:hover': { borderColor: '#8062A3', color: '#8062A3' }
                        }}
                    >
                        Моя карта
                    </Button>
                    <Button 
                        variant="outlined" 
                        onClick={() => navigate('/profile/edit')}
                        sx={{ 
                            borderRadius: '50px', 
                            textTransform: 'none', 
                            color: '#9B7EBD', 
                            borderColor: '#9B7EBD',
                            px: 4,
                            '&:hover': { borderColor: '#8062A3', color: '#8062A3' }
                        }}
                    >
                        Редактировать
                    </Button>
                </Box>
            </Paper>

            {/* Active Orders Section */}
            {activeOrders.length > 0 && (
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 4 }}>
                        Заказы в пути
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {activeOrders.map(order => (
                            <Box key={order.id} sx={{ 
                                p: 4, 
                                backgroundColor: '#fff', 
                                borderRadius: '24px', 
                                border: '1px solid #F0F0F0'
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Заказ #{order.id}</Typography>
                                    <Typography sx={{ color: '#7EB67D', fontWeight: 600 }}>В пути</Typography>
                                </Box>
                                <div className={styles.wrapper}>
                                    {order.items.map((item, idx) => (
                                        <CosmeticCard 
                                            key={`${order.id}-${idx}`} 
                                            cosmetic={item.cosmetic} 
                                            addCosmeticToBasket={onOrderAgain} 
                                        />
                                    ))}
                                </div>
                                <Box sx={{ mt: 3, textAlign: 'right' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        Итого: {order.totalPrice} сом
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}

            {/* Previously Ordered Products Section */}
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'serif', mb: 4 }}>
                    Заказано ранее
                </Typography>
                {orderedBefore.length === 0 ? (
                    <Typography color="text.secondary">У вас пока нет истории заказов</Typography>
                ) : (
                    <div className={styles.wrapper}>
                        {orderedBefore.map(cosmetic => (
                            <CosmeticCard 
                                key={cosmetic.id} 
                                cosmetic={cosmetic} 
                                addCosmeticToBasket={onOrderAgain} 
                            />
                        ))}
                    </div>
                )}
            </Box>
        </Box>
    );
};
