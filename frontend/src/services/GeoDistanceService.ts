export const GeoDistanceService = {
  async calculateDistance(points) {
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
      return { error: error.message }
    }
  },
}
