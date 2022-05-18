import React from "react";

const Example = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((definitions) =>
          definitions.definitions.map((def) => (
            <div key={def.example}>
              {def.example ? (
                <li className="definition-li" id="example">
                  {def.example}
                </li>
              ) : (
                ""
              )}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Example;
