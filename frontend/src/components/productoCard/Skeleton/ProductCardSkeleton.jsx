import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const ProductCardSkeleton = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        border: '1px solid rgba(0,0,0,0.06)', 
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff'
      }}
    >
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={320}
        animation="wave" 
      />

      <Box sx={{ display: 'flex', height: '80px' }}>
        
        <Box sx={{ 
          flex: 1, 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          gap: 1
        }}>
          {/* Título */}
          <Skeleton variant="text" width="90%" height={24} animation="wave" />
          {/* Precio */}
          <Skeleton variant="text" width="40%" height={20} animation="wave" />
        </Box>

        {/* Lado Derecho: Simulación del botón de carrito */}
        <Box sx={{ 
          width: '60px', 
          borderLeft: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Skeleton variant="circular" width={24} height={24} animation="wave" />
        </Box>

      </Box>
    </Box>
  );
};

export default ProductCardSkeleton;