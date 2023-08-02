import React, { useState } from "react";

const TreeView = ({ data, level = 0 }) => {
  const [expandedKeys, setExpandedKeys] = useState([]);

  const toggleExpand = (key) => {
    if (expandedKeys.includes(key)) {
      setExpandedKeys(expandedKeys.filter((k) => k !== key));
    } else {
      setExpandedKeys([...expandedKeys, key]);
    }
  };

  const renderTree = (data, level) => {
    return Object.entries(data).map(([key, value]) => {
      const isExpandable = Array.isArray(value) || (typeof value === "object" && value !== null);

      return (
        <div key={key} className={`pl-${level * 4} whitespace-nowrap`}>
          {isExpandable ? (
            <div
              className="cursor-pointer font-bold"
              onClick={() => toggleExpand(`${level}-${key}`)}
            >
              <span className="px-2 pb-1 bg-gray-200">
                {expandedKeys.includes(`${level}-${key}`) ? "-" : "+"} 
              </span>
              {key}
            </div>
          ) : (
            <div className="flex whitespace-nowrap">
                <span className="font-bold">{key}</span>
                <span> : {value}</span>
            </div>
          )}
          {isExpandable && expandedKeys.includes(`${level}-${key}`) && (
            <div className="ml-4">{renderTree(value, level + 1)}</div>
          )}
        </div>
      );
    });
  };

  return <div>{renderTree(data, level)}</div>;
};

export default TreeView;