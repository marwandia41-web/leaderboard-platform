import { create } from 'zustand';
import { LeaderboardEntry } from '@types/index';

interface LeaderboardStore {
  entries: LeaderboardEntry[];
  loading: boolean;
  error: string | null;
  setEntries: (entries: LeaderboardEntry[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addEntry: (entry: LeaderboardEntry) => void;
  updateEntry: (userId: string, entry: Partial<LeaderboardEntry>) => void;
}

export const useLeaderboardStore = create<LeaderboardStore>((set) => (({
  entries: [],
  loading: false,
  error: null,
  setEntries: (entries) => set({ entries }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (userId, updatedData) =>
    set((state) => (({
      entries: state.entries.map((entry) =>
        entry.userId === userId ? { ...entry, ...updatedData } : entry
      ),
    }))),
})));