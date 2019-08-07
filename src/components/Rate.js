import React from 'react';
import { FaBrain } from "react-icons/fa";

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.span`
  color: #DDD1C7;
  font-size: 14px;
  text-align: justify;
  margin-right: 8px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled(FaBrain)`
  margin-right: 4px;
`;

export default function Rate({ name, value = 1, max = 5 }) {
  return (
    <Container>
      <Name>{name}</Name>
      <Icons>
      {
        Array.apply(null, { length: value }).map((o, i) => (<Icon key={i} color="#8DB580" />))
      }
      {
        Array.apply(null, { length: max - value }).map((o, i) => (<Icon key={i} color="#DDD1C7" />))
      }
      </Icons>
    </Container>
  );
}
