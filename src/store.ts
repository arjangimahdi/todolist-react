import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryInterface {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setPlatformId: (platformId: number) => void
  setSortOrder: (sortOrder: string) => void
}

const useGameStore = create<GameQueryInterface>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set(store => ({ gameQuery: {...store.gameQuery, genreId} })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: {...store.gameQuery, platformId} })),
  setSortOrder: (sortOrder) => set(store => ({ gameQuery: {...store.gameQuery, sortOrder} })),
}))

export default useGameStore