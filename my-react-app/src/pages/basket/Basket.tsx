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
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 600, mb: 10, fontFamily: 'serif' }}>
        Моя корзина
      </Typography>

      <Box sx={{ mb: 10 }}>
        <BasketItems
          items={items}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </Box>

      <Button
        variant="outlined"
        onClick={onOrder}
        sx={{ 
          color: '#E07C7C', 
          borderColor: '#E07C7C',
          borderRadius: '12px',
          px: 6,
          py: 1,
          textTransform: 'none',
          fontSize: '1.2rem',
          fontWeight: 600,
          '&:hover': { borderColor: '#E07C7C', backgroundColor: 'rgba(224, 124, 124, 0.05)' }
        }}
      >
        оформить заказ
      </Button>
    </Container>
  );
};
