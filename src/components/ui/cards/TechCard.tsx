const TechCard = () => {
  /* Podemos hacer uso tan solo de las rutas para obtener los iconos de la Web
  en lugar de montar todo un complejo hook con filtro para iterar el array de 
  techList.
  
  Hay que tener en cuenta que tenemos iconos con svg directo y otros con dos img: una 
  modo oscuro y otra claro.
  
  Por ello puede ser interesante indicar con un ternario que si:
  https://svgl.app/library/${tech}_light.svg ? https://svgl.app/library/${tech}_light.svg : https://svgl.app/library/${tech}.svg

  de este modo nos aseguramos que el svg que obtengamos coincide, tengo o no una ruta diferente si hay modo light.
  */
  return <img src="https://svgl.app/library/tailwindcss.svg" alt="" />;
};

export default TechCard;
