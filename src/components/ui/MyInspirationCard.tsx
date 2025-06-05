const MyInspirationalCard = () => {
  return (
    /* personal inspiration card -> create local "data base". 
       people|books|podcast|music. */
    <div
      id="my-inspiration"
      className="flex flex-col gap-4 w-xs h-auto text-xs border border-indigo-500 bg-indigo-800/10 shadow-[0_0_5px_#6366f1] rounded-2xl p-4"
    >
      <h3>
        <span id="my-inspiration-type" className="text-indigo-500 font-bold">
          PEOPLE
        </span>
        | that inspires me
      </h3>
      <div className="flex gap-4 border-l-1 border-l-indigo-500 pl-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG/250px-0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG"
          alt="Imagen de Séneca"
          className="w-14 h-14 object-cover aspect-square border border-amber-400 shadow-[0_0_5px_#FFB900] rounded-2xl"
        />

        <div className="flex flex-col gap-2">
          <h4 id="my-inspiration-name" className="text-amber-400 text-base">
            Séneca
          </h4>
          <p id="my-inspiration-desc">
            Era un men muy listo que nació en un sitio de la antigüedad y daba
            la chapa, pero no chapa de aburrir, chapa de "buah, como le sabe
            este tío. Menudos factos suelta". Y al parecer motivó a la peña. No
            veas con el cordobés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInspirationalCard;
