import * as React from 'react';

export const contextWrapper = <T,>(defaultValue: T, hook: () => T) => {
  const Ctx = React.createContext<T>(defaultValue);

  const useCtx = () => React.useContext(Ctx);

  const Provider: React.FC = ({ children }) => (
    <Ctx.Provider value={hook()}>{children}</Ctx.Provider>
  );

  const wrap = <P,>(Component: React.ComponentType<P>): React.FC<P> => {
    const res: React.FC<P> = (props) => (
      <Provider>
        <Component {...props}>{props.children}</Component>
      </Provider>
    );
    res.displayName = 'withCtx';
    return res;
  };

  return {
    Ctx,
    Provider,
    useCtx,
    wrap,
  };
};
