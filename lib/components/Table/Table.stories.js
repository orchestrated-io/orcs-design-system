import React, { useMemo } from "react";
import Table from ".";
import Card from "../Card/index";
import Box from "../Box";
import Badge from "../Badge";
import PropTypes from "prop-types";

export default {
  title: "Components/Table",
  component: Table
};

export const Default = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableHiding: false
      },
      {
        accessorFn: (originalRow) => parseInt(originalRow.age),
        id: "age",
        header: "Age",
        Header: <i>Age</i>,
        Cell: Cell
      }
    ],
    []
  );

  const data = useMemo(
    () => [
      { name: "John", age: 30 },
      { name: "Sara", age: 25 }
    ],
    []
  );

  return (
    <Card>
      <Table columns={columns} data={data} />
    </Card>
  );
};

function Cell({ cell }) {
  return <i>{cell.getValue().toLocaleString()}</i>;
}
Cell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired
  }).isRequired
};

const types = {
  strat_outcome: { variant: "primaryDark", label: "Strategic Outcome" },
  okr: { variant: "primary", label: "Objective Key & result" },
  epic: { variant: "secondary", label: "Epic" },
  work_item: { variant: "warning", label: "Work Item" }
};

export const NestedTreeStructure = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: "Strategy"
      },
      {
        accessorKey: "workForce",
        id: "workForce",
        header: "Work force"
      },
      {
        accessorKey: "type",
        id: "type",
        header: "Type",
        Cell: TypeCell
      }
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        name: "Never gonna give you up",
        workForce: 391,
        type: "strat_outcome",
        children: [
          {
            name: "Never gonna let you down",
            workForce: 25,
            type: "okr",
            children: [
              {
                name: "TPP-441 Never gonna run around and desert you",
                workForce: 30,
                type: "epic",
                children: [
                  {
                    name: "TPP-684 Never gonna make you cry",
                    workForce: 25,
                    type: "work_item"
                  },
                  {
                    name: "TPP-685 Never gonna say goodbye",
                    workForce: 25,
                    type: "work_item"
                  },
                  {
                    name: "TPP-685 Never gonna tell a lie and hurt you",
                    workForce: 25,
                    type: "work_item"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Grow customer base by 5 mill",
        workForce: 391,
        type: "strat_outcome",
        children: [
          {
            name: "Launch our revolutionary HPLSF module",
            workForce: 25,
            type: "okr",
            children: [
              {
                name: "TPP-441 New space flight model test",
                workForce: 30,
                type: "epic",
                children: [
                  {
                    name: "TPP-684 Infra benchmarking",
                    workForce: 25,
                    type: "work_item"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    []
  );

  return (
    <Card>
      <Table
        columns={columns}
        data={data}
        enableExpanding
        enableExpandAll
        muiTableBodyCellProps={({ row }) => ({
          sx: () => ({
            color: row.original.type === "work_item" ? "grey" : "",
            fontWeight:
              row.depth === 0 ? 600 : row.depth === 1 ? 500 : undefined
          })
        })}
      />
    </Card>
  );
};

function TypeCell({ cell }) {
  const type = types[cell.getValue()];
  return (
    <Box>
      <Badge variant={type?.variant}>{type?.label}</Badge>
    </Box>
  );
}
TypeCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired
  }).isRequired
};
