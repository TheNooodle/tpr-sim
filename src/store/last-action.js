import { create } from "zustand"

const useLastActionStore = create((set) => ({
    lastAction: null,
    setLastAction: (lastAction) => set((state) => ({ lastAction: lastAction })),
}))

export default useLastActionStore
