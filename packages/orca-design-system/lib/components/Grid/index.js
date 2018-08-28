import styled from "styled-components";
import is from "styled-is";

export const GridItem = styled.div`
  ${is("column")`
    grid-column: ${props => props.column}`};
  ${is("row")`
    grid-row: ${props => props.row}`};
`;

const Grid = styled.div`
  display: grid;
  ${is('templateColumns')`
    grid-template-columns: ${props => props.templateColumns};
  `};
  ${is('gap')`
    grid-gap: ${props => props.gap};
  `};
  ${is('rowGap')`
    grid-row-gap: ${props => props.rowGap};
  `};
  ${is('autoRows')`
    grid-auto-rows: ${props => props.autoRows};
  `};
  ${is('width')`
    width: ${props => props.width};
  `};
  ${is('height')`
    height: ${props => props.height};
  `};
`;

export default Grid;