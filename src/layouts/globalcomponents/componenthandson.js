import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";

const HandsOnGrid = forwardRef(({ columns, rows, columnHeaders, buttonConfig = [], setRows }, ref) => {
  const hotRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getGridData: () => {
      const table = hotRef.current.hotInstance;
      const data = table.getData();
      return data.map((row) => {
        const obj = {};
        columnHeaders.forEach((header, i) => {
          obj[header] = row[i];
        });
        return obj;
      });
    },
  }));
  

  const modifiedColumns = [
    ...columns,
    {
      data: "actionsnew",
      renderer: (instance, td, row, col, prop, value, cellProperties) => {
        td.innerHTML = "";
        td.style.display = "flex";
        td.style.gap = "6px";

        buttonConfig.forEach((btn) => {
          const button = document.createElement("button");
          button.innerText = btn.label;
          button.style.padding = "4px 6px";
          button.style.fontSize = "12px";
          button.style.cursor = "pointer";
          button.onclick = () => {
            const rowData = instance.getSourceDataAtRow(row); // 🔥 Get full row data
            btn.action(row,rowData)
          };
          td.appendChild(button);
        });

        return td;
      },
      readOnly: true,
    },
  ];

  const modifiedRows = rows.map((row) => [...row, ""]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <HotTable
        ref={hotRef}
        data={modifiedRows}
        colHeaders={[...columnHeaders, "Actions"]}
        columns={modifiedColumns}
        rowHeaders={true}
        width="100%"
        height="100%"
        stretchH="all"
        licenseKey="non-commercial-and-evaluation"
        afterChange={(changes, source) => {
          if (source === "edit") {
            const table = hotRef.current.hotInstance;
            const newData = table.getData().map((row) => row.slice(0, columns.length));
            setRows(newData);
          }
        }}
        afterRemoveRow={() => {
          const table = hotRef.current.hotInstance;
          const newData = table.getData().map((row) => row.slice(0, columns.length));
          setRows(newData);
        }}
        dropdownMenu={true}
        filters={true}
      />
    </div>
  );
});

export default HandsOnGrid;


