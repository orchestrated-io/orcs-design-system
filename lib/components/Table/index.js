import React, { useCallback, useMemo } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable
} from "material-react-table";
import { merge } from "lodash";
import muiStyleOverrides from "./muiStyleOverrides";
import getExpandColumnConfig from "./getExpandColumnConfig";

const Table = ({ data, columns, ...tableConfig }) => {
  const otherConfig = {};

  const columnVisibility = {};

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
    ...muiStyleOverrides,
    ...otherConfig,
    ...tableConfig,
    columns,
    data,
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

export default Table;
