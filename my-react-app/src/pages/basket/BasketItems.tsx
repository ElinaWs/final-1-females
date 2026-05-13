import { Box, Typography, IconButton } from "@mui/material";
import type { IBasket } from "../../types";

interface Props {
  items: IBasket[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
}

export const BasketItems = ({ items, onIncrease, onDecrease, selectedIds, onToggleSelect }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, index) => (
        <Box key={item.cosmetic.id}>
          {index === 0 && <Box sx={{ borderTop: '1px solid #DFE6E9', mb: 4 }} />}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              py: 4,
            }}
          >
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <Box
                onClick={() => onToggleSelect(item.cosmetic.id)}
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '2px solid #9B7EBD',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  backgroundColor: selectedIds.includes(item.cosmetic.id) ? '#9B7EBD' : 'transparent',
                  '&::after': {
                    content: '""',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    display: selectedIds.includes(item.cosmetic.id) ? 'block' : 'none'
                  }
                }}
              />

              <Box sx={{
                width: '180px',
                height: '180px',
                backgroundColor: '#FFD1DC',
                borderRadius: '16px'
              }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', height: '180px', justifyContent: 'space-between', textAlign: 'left' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '1.1rem', maxWidth: '300px' }}>
                  {item.cosmetic.name}
                </Typography>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #B2BEC3',
                  borderRadius: '4px',
                  width: 'fit-content',
                }}>
                  <IconButton
                    size="small"
                    onClick={() => onDecrease(item.cosmetic.id)}
                    sx={{ color: '#000', fontSize: '1rem' }}
                  >
                    -
                  </IconButton>
                  <Typography sx={{ px: 2, fontWeight: 600 }}>
                    {item.count < 10 ? `0${item.count}` : item.count}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => onIncrease(item.cosmetic.id)}
                    sx={{ color: '#000', fontSize: '1rem' }}
                  >
                    +
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Typography sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
              {item.cosmetic.price}С
            </Typography>
          </Box>
          <Box sx={{ borderBottom: '1px solid #DFE6E9', mt: 4 }} />
        </Box>
      ))}
    </Box>
  );
};
