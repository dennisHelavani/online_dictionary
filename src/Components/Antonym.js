const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-2">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms.map((ant, i) => {
            return (
              <div key={i}>
                <li className="definition-li">{ant}</li>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export default Antonym;
