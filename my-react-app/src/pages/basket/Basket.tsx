import { Box, Button, Container, Typography } from "@mui/material";
import type { IBasketState } from "../../types";
import { Link } from "react-router";
import { BasketItems } from "./BasketItems";

interface Props {
  basketState: IBasketState;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onOrder: () => void;
}

export const Basket = ({ basketState, onIncrease, onDecrease, onOrder }: Props) => {
  const { items, totalPrice, totalCount } = basketState;

  if (items.length === 0) {
    return (
      <Container sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Ваша корзина пуста
        </Typography>
        <Typography variant="body1">
          <Link to="/" style={{ color: '#9B7EBD', textDecoration: 'none', fontWeight: 600 }}>Вернуться в каталог</Link>
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="main-container">
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 6 }}>Корзина</Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 400px' }, gap: 8 }}>
        <Box>
          <BasketItems
            items={items}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </Box>

        <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: '32px', height: 'fit-content', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Итого</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography color="text.secondary">Количество товаров</Typography>
            <Typography sx={{ fontWeight: 600 }}>{totalCount} шт.</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
            <Typography color="text.secondary">Общая стоимость</Typography>
            <Typography sx={{ fontWeight: 700, color: '#9B7EBD', fontSize: '1.2rem' }}>{totalPrice} сом</Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            className="pill-button"
            onClick={onOrder}
            sx={{ backgroundColor: '#9B7EBD', py: 2 }}
          >
            Оформить заказ
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
