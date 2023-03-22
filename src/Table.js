import React from "react";

import {
  Table2,
  Column,
  Cell,
  RowHeaderCell2,
  ColumnHeaderCell2,
  RegionCardinality,
  Regions,
} from "@blueprintjs/table";

export const Table = () => {
  const colNames = ["Mon", "Tue", "Wed", "Thur", "Fri"];

  const renderCell = (rowIdx, colIdx) => {
    return <Cell value={"here"} />;
  };

  const renderHeaderCell = (colIdx) => {
    return <ColumnHeaderCell2 name={colNames[colIdx]} />;
  };

  const renderRowHeaderCell = () => {
    return <RowHeaderCell2 name={"08:00"} />;
  };

  const columns = colNames.map((_name, idx) => {
    return (
      <Column
        key={idx}
        cellRenderer={renderCell}
        columnHeaderCellRenderer={renderHeaderCell}
      />
    );
  });

  return (
    <Table2
      numRows={5}
      rowHeaderCellRenderer={renderRowHeaderCell}
      selectionModes={[Regions.getRegionCardinality(Regions.cell(1, 3, 1, 3))]}
      selectedRegions={[{ cols: [1, 3], rows: [1, 3] }]}
      styledRegionGroups={[
        {
          className: "",
          regions: [
            {
              cols: [1, 3],
              rows: [1, 3],
            },
          ],
        },
      ]}
    >
      {columns}
    </Table2>
  );
};
