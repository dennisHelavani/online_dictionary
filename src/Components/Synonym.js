const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-2">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms.map((syn, i) => {
            return (
              <div key={i}>
                <li className="definition-li">{syn}</li>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export default Synonym;
