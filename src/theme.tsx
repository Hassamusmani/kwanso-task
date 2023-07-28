import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ChildernProp } from './types';

const theme = createTheme({
    // Add your custom theme options here (e.g., palette, typography, etc.)
});

const AppThemeProvider: React.FC<ChildernProp> = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </MuiThemeProvider>
    );
};

export default AppThemeProvider;