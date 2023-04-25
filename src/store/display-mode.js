import { create } from "zustand"

const useDisplayModeStore = create((set) => ({
    displayMode: "checks",
    displayChecks: () => set((state) => ({displayMode: "checks"})),
    displayTransitions: () => set((state) => ({displayMode: "transitions"})),
    displayHints: () => set((state) => ({displayMode: "hints"})),
}))

export default useDisplayModeStore
