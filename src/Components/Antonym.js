const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-2">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms.map((ant, i) => {
            return (
              <div>
                <li key={i}  className="definition-li">
                  {ant}
                </li>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export default Antonym;
