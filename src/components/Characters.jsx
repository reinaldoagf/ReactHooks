import React, { useState, useEffect, useReducer } from 'react';
const initialState = {
  favorites: []
}
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const onAdd = (element) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: element })
  }
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCharacters(data.results)
      });
  }, [])
  return (
    <>
      <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {
            favorites.favorites.map(e => (
              <div key={`fav-${e.id}`} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                <a href="#" className="w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                  <img className="flex-none w-6 h-full" src="https://remaxrec.com/wp-content/uploads/2021/03/estrella-4.png" />
                  <span className="ml-2 truncate" title={e.name}>{e.name}</span>
                </a>
              </div>
            ))
          }
      </div>

      {
        characters.map(e => (
          <div key={e.id} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img src={e.image} alt="" className="h-64 ml-auto mr-auto" />
              </figure>
              <div className={`rounded-lg p-4 flex flex-col ${e.gender === "Male" ? "bg-gray-600" : "bg-purple-600"}`} >
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    {e.name}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">{e.species}.</span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">
                    Episodios: {e.episode.length}
                  </div>
                  {
                    !favorites.favorites.find(f => f.id === e.id) && (<button onClick={() => onAdd(e)} href="#" className={`rounded-full text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300 ${e.gender === "male" ? "bg-gray-800" : "bg-purple-900"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>)
                  }
                  
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Characters;