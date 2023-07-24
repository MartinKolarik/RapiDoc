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

.main-content-inner--read-mode {
    max-width: 1248px;
    margin: 0 auto;
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

.main-content-inner--view-mode {
    padding: 0 12px;
}

@media (max-width: 1023px) {
    .main-content-inner--view-mode .endpoint-head .method {
        display: none;
    }
}

.nav-label {
   padding: 1px 4px;
   border-radius: 4px;
   font-size: calc(var(--font-size-small) - 2px);
   white-space: nowrap;
   background-color: var(--blue);
   margin: 0 10px 0 auto;
   color: #fff
}

.nav-label.false {
    display: none;
}

.response-panel table {
    width: 100%;
}

#api-description {
    padding: 20px 0 20px;
}
`;
