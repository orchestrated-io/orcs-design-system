import React from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
  MRT_ExpandAllButton
} from "material-react-table";
import { get } from "lodash";
import { Stack } from "@mui/material";
import Box from "../Box";
import muiStyleOverrides from "./muiStyleOverrides";

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
