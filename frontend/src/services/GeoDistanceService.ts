import { type GeoPoint } from '../types/index'

export const GeoDistanceService = {
  async calculateDistance(points: { point1: GeoPoint; point2: GeoPoint }) {
    try {
      const response = await fetch('http://localhost:8000/distance.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(points),
      })

      if (!response.ok) throw new Error('Błąd serwera')

      return await response.json()
    } catch (error) {
      console.error(error)
      return { error: error instanceof Error ? error.message : 'An unknown error occurred' }
    }
  },
}
