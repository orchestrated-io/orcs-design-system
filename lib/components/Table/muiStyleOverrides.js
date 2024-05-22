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

export default muiStyleOverrides;
