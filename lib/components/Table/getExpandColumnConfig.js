import { Stack } from "@mui/material";
import { MRT_ExpandAllButton, MRT_ExpandButton } from "material-react-table";
import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import { get } from "lodash";
import styled from "styled-components";
import { PropTypes } from "prop-types";

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
    return (
      <Flex alignItems="center">
        <firstCol.Cell {...props} renderedCellValue={renderedCellValue} />
      </Flex>
    );
  }

  return <Flex alignItems="center">{renderedCellValue} </Flex>;
};

GroupedCell.propTypes = PropTypes.Obj;

const HeaderCell = (props) => {
  const { table, firstCol, tableConfig } = props;
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
};

HeaderCell.propTypes = PropTypes.Obj;

export default (firstCol, tableConfig) => ({
  "mrt-row-expand": {
    Header: (props) => (
      <HeaderCell {...props} firstCol={firstCol} tableConfig={tableConfig} />
    ),
    Cell: (props) => (
      <Flex alignItems="center">
        <MRT_ExpandButton {...props} />

        <GroupedCell {...props} firstCol={firstCol} />
      </Flex>
    ),
    enableResizing: true,
    size: 200
  }
});
