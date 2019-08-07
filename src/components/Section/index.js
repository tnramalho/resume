import React from 'react';

import { Container, Header, Content, Title, Description } from './styles';

export default function Section({ 
    title, 
    children, 
    align = 'flex-start' || 'center' || 'flex-end',
    justify = 'flex-start' || 'center' || 'flex-end',
    direction = 'row' || 'column',
}) {
  return (
    <Container>
        {
            (title) && (
                <Header>
                    <Title>{title}</Title>
                </Header>
            )
        }
        <Content justify={justify} align={align} direction={direction}>
            { children }
        </Content>
    </Container>
  );
}
