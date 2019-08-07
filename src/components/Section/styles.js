import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 20px 0;
  @media print {
    page-break-inside: avoid;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-grow: 0.2;
  flex-basis: 0;
  align-items: justify;
  flex-direction: column;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: ${props => props.noHeader ? '1' : '0.8'};
  flex-basis: 0;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
`;

export const Name = styled.span`
    color: #C9BEB5;
    text-transform: uppercase;
    font-weight: bold;
`;

export const Title = styled.span`
    color: #8DB580;
    text-align: justify;
`;

export const Subtitle = styled.span`
    color: #C9BEB5;
    font-size: 14px;
    text-align: justify;
    @media print {
      font-size: 7px;
    }
`;

export const Bio = styled.p`
    color: #DDD1C7;
    text-align: justify;
`;

export const Description = styled.li`
    color: #DDD1C7;
    font-size: 14px;
    text-align: justify;
    @media print {
      font-size: 9px;
    }
`;

export const ContactType = styled.span`
    color: #DDD1C7;
`;

export const ContactValue = styled.a`
    color: #8DB580;
`;

export const Contact = styled.div.attrs(props => ({
  children: (
    <>
    <ContactType>{'{ '}{props.type}{': '}</ContactType>
    <ContactValue>{props.value}</ContactValue>
    <ContactType>{' }'}</ContactType>
    </>
  )
}))``;