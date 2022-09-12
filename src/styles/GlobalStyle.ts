import { Theme } from '@mui/material';
import '@mui/material/colors';

const GlobalStyle = (theme: Theme) => ({
  '*::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
  },
  '*::-webkit-scrollbar-thumb': {
    background: `${theme.palette.common.black}0007A`,
    borderRadius: '8px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.text.secondary,
  },
  '*::-webkit-scrollbar-track': {
    background: theme.palette.action.disabledOpacity,
    borderRadius: '10px',
  },
});

export default GlobalStyle;
