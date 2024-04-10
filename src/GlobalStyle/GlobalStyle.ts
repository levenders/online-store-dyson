'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-black: #111111;
  --primary-red: #C5358C;
  --primary-gray: #ABABAB;
  --white: #FFFFFF;
  --gray: #F8F8F8;
  --agree-green: #68AE5C;
  --disagree-red: #DC5B5B;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  color: var(--black);
  background: #f5f6f8;
  font-family: var(--font-open-sans);
}

a {
  color: inherit;
  text-decoration: none;
}
`
