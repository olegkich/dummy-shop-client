import { FC, ReactElement, ReactNode } from "react";
import { createContext } from "react";

import RootStore from "./RootStore";

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
    store: RootStore;
    children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
    children,
    store,
}): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
