/* Mixins */
import { css } from "styled-components";

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const genericTitle = (font, size = '3rem') => css`
    font-family: ${font};
    color: var(--pr);
    font-size: ${size};
    margin: .5rem 0;
`

export const genericContainer = css`
    border: 1px solid var(--pr);
    border-radius: 5px;
    padding: 1rem;
    width: 75dvw;
    margin-bottom: 1rem;
`