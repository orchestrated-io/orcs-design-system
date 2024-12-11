import React, { useCallback, useMemo } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable
} from "material-react-table";
import { merge, map } from "lodash";
import muiStyleOverrides from "./muiStyleOverrides";
import getExpandColumnConfig from "./getExpandColumnConfig";
import { PropTypes } from "prop-types";

const Table = ({ data, columns: columnOverrides, ...tableConfig }) => {
  const otherConfig = {};

  const columnVisibility = {};

  const columns = useMemo(() => {
    return tableConfig?.enableSorting
      ? columnOverrides
      : map(columnOverrides, (col) => {
          return {
            ...col,
            enableSorting: false
          };
        });
  }, [columnOverrides, tableConfig?.enableSorting]);

  const firstCol = useMemo(() => columns[0], [columns]);

  if (tableConfig.enableExpanding) {
    columnVisibility[firstCol.id] = false;

    columns[0].visibleInShowHideMenu = false;

    otherConfig.displayColumnDefOptions = getExpandColumnConfig(
      firstCol,
      tableConfig
    );
  }

  const table = useMaterialReactTable({
    getSubRows: (row) => row.children,
    ...muiStyleOverrides,
    ...otherConfig,
    ...tableConfig,
    columns,
    data,
    enableExpanding: true,
    initialState: merge(
      { density: "compact", columnVisibility },
      tableConfig.initialState || {}
    )
  });

  const customSetColumnVisibility = useCallback(
    (columnVisibility) => ({ ...columnVisibility, [firstCol.id]: false }),
    [firstCol]
  );

  if (tableConfig.enableExpanding) {
    table.setColumnVisibility = customSetColumnVisibility;
  }

  return <MaterialReactTable table={table} />;
};

Table.propTypes = PropTypes.Obj;

export default Table;
