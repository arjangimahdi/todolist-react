import { create } from "zustand";

interface CounterStoreInterface {
  counter: number
  increment: () => void
  reset: () => void
}

const useCounterStore = create<CounterStoreInterface>((set) => ({
  counter: 0,
  increment: () => set(store => ({counter: store.counter += 1})),
  reset: () => set(store => ({ counter: 0 }))
}))

export default useCounterStore