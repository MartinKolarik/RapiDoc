import { css } from 'lit';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

// language=CSS
export default css`
:host {
    --font-size-small: 13px;
}

#nav-bar-search {
    border-color: var(--nav-bg-color) !important;
}

#nav-bar-search + div {
    display: none;
}

.nav-bar > div:first-of-type {
    padding: 8px 14px 12px 15px !important;
}

.nav-bar-path {
    font-size: calc(var(--font-size-small) + 0px);
}
`;
