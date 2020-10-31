import React from 'react';

const MutosContext = React.createContext();

export const MutosProvider = MutosContext.Provider;
export const MutosConsumer = MutosContext.Consumer;

export default MutosContext;
