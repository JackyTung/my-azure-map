import { createGlobalStyle, css } from "styled-components";

export const reset = css`
  * {
    box-sizing: border-box;
  }

  body,
  ul,
  ol,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form,
  input,
  button {
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  textarea {
    border: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  input {
    outline: 0 none;
  }

  img,
  input {
    border: none;
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    list-style: none;
  }

  i {
    font-style: normal;
  }

  button,
  input[type="button"],
  input[type="submit"] {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: currentColor;
  }
  // a:visited {
  //   color: currentColor;
  // }

  a:focus,
  button:focus,
  input:focus {
    outline: 0;
  }

  //placeholder style
  input:input-placeholder,
  textarea:input-placeholder,
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #e6e6e6;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder,
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #999;
  }

  //input shadow
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px #fff inset;
  }

  // 清除ie输入框叉叉
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }

  // Correct block display not defined for any HTML5 element in IE 8/9.
  // Correct block display not defined for details or summary in IE 10/11 and Firefox.
  // Correct block display not defined for main in IE 11.
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  // Correct inline-block display not defined in IE 9-.
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 3px;
    margin: 0;
  }

  &::-webkit-scrollbar {
    height: 0;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bababe;
    border-radius: 3px;
  }

  &::-webkit-scrollbar :horizontal {
    height: 5px;
    width: 5px;
  }
`;

const Reset = createGlobalStyle`${reset}`;

export default Reset;
