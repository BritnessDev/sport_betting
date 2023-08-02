import React, { useState } from 'react';
import TreeView from './TreeView';


const TableComponent = ({ tableData }) => {

  const tableDataArray = []
  tableDataArray.push(tableData)

  const [activeBox, setActiveBox] = useState({ rowId: null, header: null });

  const renderBox = (data) => {
    if (!data) return null;
    return (
      <div className="bg-white border p-5 absolute mt-2 z-[100] rounded-lg max-w-[500px]">
        <TreeView data={data} />
      </div>
    );
  };

  const renderRow = (data, index = 0) => {
  
    return (
      <React.Fragment key={index}>
        <tr
          className="bg-gray-300 relative"
        >
          {Object.entries(data).map(([key, value]) => {
            const isObjectWithValue = value && typeof value === 'object' && Object.keys(value).length > 0;
  
            if (!isObjectWithValue) {
              return (
                <td key={key} className="border px-4 py-2">
                  {value}
                </td>
              );
            } else {
              return (
                <td key={key} className="border px-4 py-2 relative cursor-pointer">
                  <span onClick={() => setActiveBox(activeBox.index === index && activeBox.header === key ? { index: null, header: null } : { index, header: key })}>
                    ...
                  </span>
                  {activeBox.index === index && activeBox.header === key && renderBox(value)}
                </td>
              );
            }
          })}
        </tr>
      </React.Fragment>
    );
  };

  return (
    <>
      {
        tableData && Array.isArray(tableData) ?
          (
            <table className="table-auto w-full overflow-auto">
              <thead>
                <tr>
                  {tableData[0] && Object.keys(tableData[0]).map((key) => (
                    <th key={key} className="border px-4 py-2 bg-gray-100">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.length > 0 && tableData.map((rowData, index) => renderRow(rowData, index))}
              </tbody>
            </table>
          ) : 
          (
            <table className="table-auto w-full overflow-auto">
              <thead>
                <tr>
                  {tableData && Object.keys(tableData).map((key) => (
                    <th key={key} className="border px-4 py-2 bg-gray-100">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableDataArray.map((rowData, index) => renderRow(rowData, index))}
              </tbody>
            </table>
          )
      }
      {
        tableData.length === 0 && (
          <p className="flex justify-center text-[25px]">No search result</p>
        )
      }
    </>
  );
};

export default TableComponent;