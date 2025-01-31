import React from "react";
import Icon from "../Icon";
import Box from "../Box";

const muiStyleOverrides = {
  muiExpandButtonProps: ({ row }) => {
    return {
      children: row?.getIsExpanded() ? (
        <Box p="s">
          <Icon icon={["fas", "chevron-down"]} size="xs" />
        </Box>
      ) : (
        <Box p="s">
          <Icon icon={["fal", "chevron-right"]} size="xs" />
        </Box>
      )
    };
  },
  muiBottomToolbarProps: {
    sx: {
      display: "none" // Remove bottom toolbar
    }
  },
  muiTableHeadProps: {
    sx: {
      backgroundColor: "transparent", // No background for header
      "& .MuiTableCell-root": {
        color: "#6b7280", // Subtle text color (gray tone)
        fontWeight: "600", // Slightly bold for clarity
        padding: "0 0 6px 0", // Consistent padding
        borderBottom: "1px solid #e0e0e0", // Subtle header-row separation
        textAlign: "left", // Ensure text alignment is consistent
        lineHeight: "1.5", // Enhance readability
        fontSize: "1.3rem"
      },
      "& button": {
        display: "none" // Explicitly hide any buttons in the header
      }
    }
  },
  muiTableBodyRowProps: ({ row, table }) => {
    let borderBottomStyle = "solid";

    if (row.getIsExpanded()) {
      borderBottomStyle = "dashed";
    }

    if (!row.originalSubRows && table.options.enableExpanding) {
      const subRows = row.getParentRow()?.subRows;

      if (!subRows) {
        borderBottomStyle = "none";
      } else {
        const lastSubRowOfParent = subRows[subRows.length - 1];
        borderBottomStyle = lastSubRowOfParent.id === row.id ? "solid" : "none";
      }
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
      fontFamily: "inherit",
      fontSize: "1.3rem",
      fontWeight: "normal",
      "& th, .MuiTableCell-root": {
        fontWeight: "normal",
        fontSize: "1.3rem",
        fontFamily: "inherit"
      },
      "& td": {
        fontFamily: "inherit",
        fontSize: "1.3rem",
        fontWeight: "normal"
      },
      "& td, .MuiTableCell-root": {
        padding: "6px 0 6px 0",
        marginLeft: "0"
      }
    }
  },
  muiTableBodyCellProps: {
    sx: {
      fontWeight: "normal", // Remove bold when expanded
      fontSize: "1.3rem",
      // Default row cell style
      "&.MuiTableRow-root": {
        fontWeight: "normal" // Ensure the font is not bold by default
      },
      "&.expanded": {
        fontWeight: "normal" // Remove bold when expanded
      }
    }
  },
  muiTablePaperProps: {
    sx: { boxShadow: "none" }
  }
};

export default muiStyleOverrides;
