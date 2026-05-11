import { Box, Button, Container, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router";
import type { IUser, IOrder, ICosmetic } from "../../types";

interface Props {
    user: IUser | null;
    orders: IOrder[];
    onOrderAgain: (cosmetic: ICosmetic) => void;
}

export const Profile = ({ user, orders, onOrderAgain }: Props) => {
    const navigate = useNavigate();

    if (!user) {
        return (
            <Container className="main-container">
                <Typography variant="h5" align="center">Пожалуйста, авторизуйтесь</Typography>
                <Button onClick={() => navigate('/register')}>Перейти к регистрации</Button>
            </Container>
        );
    }

    const inTransitOrders = orders.filter(o => o.status === 'in-transit');
    const pastOrders = orders.filter(o => o.status === 'delivered');

    return (
        <Container className="main-container">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>Профиль</Typography>
                <Button variant="outlined" onClick={() => navigate('/profile/edit')} className="pill-button">
                    Редактировать
                </Button>
            </Box>

            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Данные профиля</Typography>
                <Typography>Имя: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Телефон: {user.phone}</Typography>
                <Typography>Адрес: {user.address}</Typography>
            </Box>

            <Divider sx={{ mb: 6 }} />

            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Заказы в пути</Typography>
                {inTransitOrders.length === 0 ? (
                    <Typography color="text.secondary">У вас пока нет активных заказов</Typography>
                ) : (
                    inTransitOrders.map(order => (
                        <Box key={order.id} sx={{ p: 3, mb: 2, backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                            <Typography sx={{ fontWeight: 600 }}>Заказ #{order.id}</Typography>
                            <Typography variant="body2" color="text.secondary">Дата: {order.date}</Typography>
                            <Typography variant="body2" color="text.secondary">Сумма: {order.totalPrice} сом</Typography>
                            <Typography color="#7EB67D" sx={{ fontWeight: 600 }}>Статус: В пути</Typography>
                        </Box>
                    ))
                )}
            </Box>

            <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Заказать еще раз</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {orders.flatMap(o => o.items).map((item, idx) => (
                        <Box key={idx} sx={{ p: 2, backgroundColor: '#fff', borderRadius: '16px', textAlign: 'center', width: '200px' }}>
                            <Typography sx={{ fontWeight: 600, mb: 1 }}>{item.cosmetic.name}</Typography>
                            <Button size="small" onClick={() => onOrderAgain(item.cosmetic)} className="pill-button" sx={{ backgroundColor: '#9B7EBD', color: '#fff', '&:hover': { backgroundColor: '#8062A3' } }}>
                                Добавить
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};
