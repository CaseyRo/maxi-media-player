// Importing CSS as a string
import cssContent from './sass/styles.scss';

// Importing LitElement and related functions
import { css, CSSResult, LitElement, html,unsafeCSS } from 'lit-element';

// Converting the CSS string to CSSResult
const style: CSSResult = css`${unsafeCSS(cssContent)}`;

export default style;
