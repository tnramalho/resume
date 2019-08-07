import React from 'react';

import { Container, Header, Content, Name } from './styles';

export default function Section({ 
    name, 
    headerContentRender,
    children, 
    align = 'flex-start' || 'center' || 'flex-end',
    justify = 'flex-start' || 'center' || 'flex-end',
    direction = 'row' || 'column',
}) {
  return (
    <Container>
        {
            (name && (
                <Header>
                    <Name>{name}</Name>
                </Header>
            )) || (headerContentRender && (
                <Header>
                    {headerContentRender()}
                </Header>
            ))
        }
        <Content justify={justify} align={align} direction={direction} noHeader={!name && !headerContentRender}>
            { children }
        </Content>
    </Container>
  );
}
