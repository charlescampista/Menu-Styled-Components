import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global';
import { Bar, Menu } from './components';
import { useOnClickOutside } from './hooks';
export default function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <ThemeProvider theme={theme} >
        <>
          <GlobalStyle></GlobalStyle>
          <div ref={node}>
            <Bar open={open} setOpen={setOpen} />
            <Menu open={open} />
          </div>

          <h1>Your page goes here</h1>

        </>
      </ThemeProvider>
    </div>
  )
}
