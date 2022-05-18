import React from "react";

const Definition = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((definitions) =>
          definitions.definitions.map((def) => (
            <div key={def.definition}>
              <li className="definition-li">{def.definition}</li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Definition;
