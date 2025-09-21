import React, {createContext,useReducer} from 'react'
// import { useReducer } from 'react'

// export const DataContext = creatContext();

// export const DataProvider =({children,reducer,initialState})=> {
// 	return (
// 		<DataContext.Provider value={useReducer(reducer,initialState)}>
// 			{children}

// 		</DataContext.Provider>

// 	)
// }
export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
	
//   const [state, dispatch] = useReducer(reducer, initialState);

  return (<DataContext.Provider value={ useReducer (reducer,initialState)}>
      {children}
    </DataContext.Provider>
  );
};

