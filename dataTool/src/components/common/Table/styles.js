import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: scroll;
  @media (min-width: 1250px) {
    overflow-x: inherit;
  }
`;
export const Table = styled.table`
  border: black 2px solid;
`;
export const TableHead = styled.thead`
`;
export const TableRow = styled.tr`
  text-align: center;
  padding-left: 20px;
  td:first-child {
    text-align: left;
  }
`;
export const TableBody = styled.tbody`
`;
export const TableHeading = styled.th`
  padding: 10px;
  border-top: 1px solid #fafafa;
  border-bottom: 1px solid #e0e0e0;
`;
export const TableColumn = styled.td`
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
`;
