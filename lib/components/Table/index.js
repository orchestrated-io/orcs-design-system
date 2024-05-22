import React from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
  MRT_ExpandAllButton
} from "material-react-table";
import { get } from "lodash";
import { Stack } from "@mui/material";
import Box from "../Box";

const muiStyleOverrides = {
  muiBottomToolbarProps: { sx: { boxShadow: "none" } },
  muiTableHeadProps: {
    sx: {
      height: "32px",
      borderRadius: "5px",
      "& .MuiTableCell-root": {
        borderBottom: "none",
        paddingTop: 0,
        paddingBottom: 0,
        verticalAlign: "middle"
      },
      "& .MuiTableRow-root": {
        borderRadius: "5px",
        background: "#F2F5F5",
        boxShadow: "none"
      },
      "& th:nth-child(1)": {
        borderRadius: "5px 0px 0px 5px"
      },
      "& th:nth-last-child(1)": {
        borderRadius: "0px 5px 5px 0px"
      }
    }
  },
  muiTableBodyRowProps: ({ row, table }) => {
    let borderBottomStyle = "solid";

    if (row.getIsExpanded()) {
      borderBottomStyle = "dashed";
    }

    if (!row.originalSubRows && table.options.enableExpanding) {
      const lastSubRowOfParent =
        row.getParentRow().subRows[row.getParentRow().subRows.length - 1];

      borderBottomStyle = lastSubRowOfParent.id === row.id ? "solid" : "none";
    }

    return {
      sx: {
        "&:not(.Mui-TableBodyCell-DetailPanel) .MuiTableCell-root": {
          borderBottomStyle
        }
      }
    };
  },
  muiTableProps: {
    sx: {
      borderCollapse: "separate !important",
      tableLayout: "fixed",

      fontSize: "12px",
      "& td, .MuiTableCell-root": {
        fontSize: "12px"
      }
    }
  },
  muiTablePaperProps: {
    sx: { boxShadow: "none" }
  }
};

const Table = ({ data, columns, ...tableConfig }) => {
  const otherConfig = {};

  if (tableConfig.enableExpanding) {
    const firstCol = columns[0];

    otherConfig.displayColumnDefOptions = {
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
              {tableConfig.enableExpandAll && (
                <MRT_ExpandAllButton table={table} />
              )}

              <Box>{headerMarkup}</Box>
            </Stack>
          );
        },
        GroupedCell: (props) => {
          const { row } = props;

          if (firstCol.Cell) return <firstCol.Cell {...props} />;

          return get(row.original, firstCol.accessorKey);
        },
        enableResizing: true,
        size: 200
      }
    };
  }

  const finalColumns = tableConfig.enableExpanding
    ? [...columns.slice(1, columns.length)]
    : columns;

  const table = useMaterialReactTable({
    ...muiStyleOverrides,
    initialState: { density: "compact" },
    ...otherConfig,
    ...tableConfig,
    columns: finalColumns,
    data
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
