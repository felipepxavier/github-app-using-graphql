import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import theme from 'styles/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithThemeEndRouter = (
  children: React.ReactNode
): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
