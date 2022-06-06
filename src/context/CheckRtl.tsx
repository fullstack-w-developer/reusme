import { createContext } from "react";
import createPersistedState from "use-persisted-state";
const useCounterState = createPersistedState("checkrtl");

export const checkrtl = createContext<any>(null);

interface propsTypes {
  children: React.ReactNode;
}

export const CheckRtl = ({ children }: propsTypes) => {
  const [isRtl, setIsRtl] = useCounterState("");
  return (
    <checkrtl.Provider value={{ isRtl, setIsRtl }}>
      {children}
    </checkrtl.Provider>
  );
};
