export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          genre: string | null
          id: number
          image: string
          name: string | null
          opinions: number | null
          rating: number | null
        }
        Insert: {
          genre?: string | null
          id?: number
          image: string
          name?: string | null
          opinions?: number | null
          rating?: number | null
        }
        Update: {
          genre?: string | null
          id?: number
          image?: string
          name?: string | null
          opinions?: number | null
          rating?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
