import { Box, Button, Container, Typography } from "@mui/material";
import type { IBasket, IBasketState } from "../../types";
import { Link } from "react-router";
import { BasketItems } from "./BasketItems";
import { useState } from "react";

interface Props {
  basketState: IBasketState;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onOrder: (itemsToOrder: IBasket[]) => void;
  onClear: () => void;
}

export const Basket = ({ basketState, onIncrease, onDecrease, onOrder, onClear }: Props) => {
  const { items } = basketState;
  const [selectedIds, setSelectedIds] = useState<string[]>(items.map(i => i.cosmetic.id));

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === items.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(items.map(i => i.cosmetic.id));
    }
  };

  const selectedItems = items.filter(item => selectedIds.includes(item.cosmetic.id));

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
      <Typography variant="h3" sx={{ fontWeight: 600, mb: 6, fontFamily: 'serif' }}>
        Моя корзина
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, cursor: 'pointer' }} onClick={toggleSelectAll}>
        <Box
          sx={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '2px solid #9B7EBD',
            mr: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            backgroundColor: selectedIds.length === items.length ? '#9B7EBD' : 'transparent',
            '&::after': {
              content: '""',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: selectedIds.length === items.length ? 'block' : 'none'
            }
          }}
        />
        <Typography sx={{ fontWeight: 500, color: '#2D3436' }}>Выбрать все</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button 
          onClick={onClear} 
          sx={{ color: '#E07C7C', textTransform: 'none', fontWeight: 600 }}
        >
          Очистить всё
        </Button>
      </Box>

      <Box sx={{ mb: 10 }}>
        <BasketItems
          items={items}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
        />
      </Box>

      <Button
        variant="outlined"
        disabled={selectedIds.length === 0}
        onClick={() => onOrder(selectedItems)}
        sx={{
          color: '#E07C7C',
          borderColor: '#E07C7C',
          borderRadius: '12px',
          px: 6,
          py: 1,
          textTransform: 'none',
          fontSize: '1.2rem',
          fontWeight: 600,
          '&:hover': { borderColor: '#E07C7C', backgroundColor: 'rgba(224, 124, 124, 0.05)' },
          '&.Mui-disabled': { borderColor: '#DFE6E9', color: '#B2BEC3' }
        }}
      >
        оформить заказ ({selectedItems.length})
      </Button>
    </Container>
  );
};
