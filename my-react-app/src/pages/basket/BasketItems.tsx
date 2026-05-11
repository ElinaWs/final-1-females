import { Box, Typography, IconButton } from "@mui/material";
import type { IBasket } from "../../types";

interface Props {
  items: IBasket[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}

export const BasketItems = ({ items, onIncrease, onDecrease }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map(item => (
        <Box
          key={item.cosmetic.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "8px"
          }}
        >
          <Typography sx={{ flex: 1 }}>
            {item.cosmetic.name}
          </Typography>

          <Typography sx={{ minWidth: "120px", textAlign: "center" }}>
            Quantity: {item.count}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton onClick={() => onDecrease(item.cosmetic.id)}>
              -
            </IconButton>

            <IconButton onClick={() => onIncrease(item.cosmetic.id)}>
              +
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
