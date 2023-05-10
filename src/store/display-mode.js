import { create } from "zustand"

const useDisplayModeStore = create((set) => ({
    displayMode: "tracker",
    displayTracker: () => set((state) => ({displayMode: "tracker"})),
    displayChecks: () => set((state) => ({displayMode: "checks"})),
    displayTransitions: () => set((state) => ({displayMode: "transitions"})),
    displayHints: () => set((state) => ({displayMode: "hints"})),
}))

export default useDisplayModeStore
