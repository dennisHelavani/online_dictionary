const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-2">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms.map((Ant, i) => {

            return (
              <div key={i}>
                <li className="definition-li">{Ant}</li>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export default Antonym;
