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
            padding: "16px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.03)"
          }}
        >
          <Typography sx={{ flex: 1, fontWeight: 500 }}>
            {item.cosmetic.name}
          </Typography>

          <Typography sx={{ minWidth: "120px", textAlign: "center", fontWeight: 600, color: "#9B7EBD" }}>
             {item.count} шт.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton 
                onClick={() => onDecrease(item.cosmetic.id)}
                sx={{ color: "#9B7EBD", backgroundColor: "rgba(155, 126, 189, 0.1)", '&:hover': { backgroundColor: "rgba(155, 126, 189, 0.2)" } }}
            >
              -
            </IconButton>

            <IconButton 
                onClick={() => onIncrease(item.cosmetic.id)}
                sx={{ color: "#9B7EBD", backgroundColor: "rgba(155, 126, 189, 0.1)", '&:hover': { backgroundColor: "rgba(155, 126, 189, 0.2)" } }}
            >
              +
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
