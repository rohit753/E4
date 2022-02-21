
const initialState = [
  {
    id: 1,
    title: "Linkbuzz",
    url: "https://weather.com",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    author: "Jenkins, Blanda and Ferry",
    creation_date: "1616250019000",
    explicit: true,
    quality: 53,
  },
];
const SearchReducer = (state = initialState, action) =>
{ 
    switch (action.type)
    { 
        case "search": state = [...state, action.payload]
            return state;
        case "sort_date_asc": state = state.sort((a, b) => { return a.creation_date - b.creation_date; })
            return state;
        case"sort_date_dsc":state = state.sort((a, b) => {
          return b.creation_date - a.creation_date;
        });
            return state;
        case"sort_alpha_asc":state = state.sort((a, b) => {
          return a.title - b.title;
        });
            return state;
        case"sort_alpha_dsc":state = state.sort((a, b) => {
          return b.title - a.title;
        });
            return state;
        case"sort_qual_asc":state = state.sort((a, b) => {
          return a.quality - b.quality;
        });
            return state;
        case"sort_qual_dsc":state = state.sort((a, b) => {
          return b.quality - a.quality;
        });
            return state;
        case "isexp": state = state.filter((a) => a.explicit === true);
            return state;
        case "indi": state = state.filter((a) => a.id === action.payload); 
            return state;
        default: return state;
    }
}

export default SearchReducer;