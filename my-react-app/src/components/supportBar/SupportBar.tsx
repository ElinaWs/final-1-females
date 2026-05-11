import { Box, Typography } from "@mui/material";

export const SupportBar = () => {
    return (
        <Box sx={{ 
            backgroundColor: '#F8F5F2', 
            py: 2, 
            textAlign: 'center',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
        }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#2D3436' }}>
                служба поддержки +996 000 000 000
            </Typography>
        </Box>
    );
};
