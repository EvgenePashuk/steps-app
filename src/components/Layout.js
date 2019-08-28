import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin: 20px auto;
`;

const Layout = ({children}) => (
    <LayoutContainer>{children}</LayoutContainer>
);

export default Layout;