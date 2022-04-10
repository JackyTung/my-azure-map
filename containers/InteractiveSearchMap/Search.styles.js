import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 400px;
  box-shadow: 0px 24px 74px 0px rgba(0, 0, 0, 0.32);
  border: 1px solid #ccc;
  overflow-y: hidden;

  & > .search-input-box {
    background: #fff;
    height: 72px;
    width: 100%;
  }

  & > .search-input-box > .search-input-group {
    position: relative;
    top: 20px;
    left: 20px;
    width: 358px;
    height: 30px;
    margin: 0;
    padding: 0;
    border: 1px dotted #ccc;
  }

  & > .search-input-box > .search-input-group > .search-icon {
    margin: 0;
    padding: 0;
    background-size: 20px 20px;
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ctitle%3E-%3C/title%3E%3Cpath d='M10.5,0a5.4457,5.4457,0,0,1,2.7734.75A5.6134,5.6134,0,0,1,15.25,2.7266a5.5224,5.5224,0,0,1,.5547,4.2344A5.4147,5.4147,0,0,1,15.25,8.2734,5.6134,5.6134,0,0,1,13.2734,10.25a5.5014,5.5014,0,0,1-4.6445.4219,5.6256,5.6256,0,0,1-1.6445-.9453L.8516,15.8516A.4807.4807,0,0,1,.5,16a.4823.4823,0,0,1-.3516-.1484.4905.4905,0,0,1,0-.7031l6.125-6.1328a5.6194,5.6194,0,0,1-.9453-1.6445A5.39,5.39,0,0,1,5,5.5a5.4457,5.4457,0,0,1,.75-2.7734A5.6134,5.6134,0,0,1,7.7266.75,5.4457,5.4457,0,0,1,10.5,0Zm0,10a4.347,4.347,0,0,0,1.75-.3555A4.5254,4.5254,0,0,0,14.6445,7.25,4.347,4.347,0,0,0,15,5.5a4.347,4.347,0,0,0-.3555-1.75A4.5254,4.5254,0,0,0,12.25,1.3555a4.4854,4.4854,0,0,0-3.5,0A4.5254,4.5254,0,0,0,6.3555,3.75a4.4854,4.4854,0,0,0,0,3.5A4.5254,4.5254,0,0,0,8.75,9.6445,4.3487,4.3487,0,0,0,10.5,10Z' fill='%234b4b4b'/%3E%3C/svg%3E");
  }

  & > .search-input-box > .search-input-group > input {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 30px;
    width: calc(100% - 40px);
    height: 100%;
    margin: 0;
    padding: 0 5px;
    border-collapse: collapse;
    border: 0px;
  }

  & > .search-input-box > .search-input-group > input:focus {
    outline: none;
  }
`;

export const StyledPanel = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style: none;
  overflow-y: auto;
  max-height: calc(100vh - 119px);

  & > li {
    border-top: 1px dotted #ccc;
    padding: 10px 20px;
  }

  & > li:hover {
    background-color: #f1f2f2;
    cursor: pointer;
  }

  & > li > .title {
    font-family: segoeui-b;
    line-height: 14pt;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > li > .info {
    width: 100%;
    line-height: 14pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
