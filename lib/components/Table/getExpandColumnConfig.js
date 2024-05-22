import { Stack } from "@mui/material";
import { MRT_ExpandAllButton } from "material-react-table";
import React from "react";
import Box from "../Box";
import { get } from "lodash";
import styled from "styled-components";

const StyledHighlight = styled.span`
  background-color: ${(props) => props.matchHighlightColor};
  border-radius: 2px;
  padding: 2px 1px;
`;

const getHiglightedSearchTerm = ({
  value,
  searchTerm,
  matchHighlightColor
}) => {
  const regex = new RegExp(`(${searchTerm})`, "i");

  return value.split(regex).map((part, i) =>
    part.match(regex) ? (
      <StyledHighlight key={part + i} matchHighlightColor={matchHighlightColor}>
        {part}
      </StyledHighlight>
    ) : (
      part
    )
  );
};

const GroupedCell = (props) => {
  const { row, table, firstCol } = props;
  const {
    mrtTheme: { matchHighlightColor },
    enableFilterMatchHighlighting
  } = table?.options || {};

  const searchTerm = table.getState().globalFilter;

  const value = get(row.original, firstCol.accessorKey);
  let renderedCellValue = value;

  if (enableFilterMatchHighlighting && searchTerm) {
    renderedCellValue = getHiglightedSearchTerm({
      value,
      searchTerm,
      matchHighlightColor
    });
  }

  if (firstCol.Cell) {
    return <firstCol.Cell {...props} renderedCellValue={renderedCellValue} />;
  }

  return renderedCellValue;
};

export default (firstCol, tableConfig) => ({
  "mrt-row-expand": {
    Header: (props) => {
      const { table } = props;
      let headerMarkup = firstCol.header;

      if (React.isValidElement(firstCol.Header)) {
        headerMarkup = firstCol.Header;
      }

      if (typeof firstCol.Header === "function") {
        headerMarkup = <firstCol.Header />;
      }

      return (
        <Stack direction="row" alignItems="center">
          {tableConfig.enableExpandAll && <MRT_ExpandAllButton table={table} />}

          <Box>{headerMarkup}</Box>
        </Stack>
      );
    },
    GroupedCell: (props) => <GroupedCell {...props} firstCol={firstCol} />,
    enableResizing: true,
    size: 200
  }
});
