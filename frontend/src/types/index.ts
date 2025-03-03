export type GeoPoint = {
  lat: number
  lng: number
}

export interface DistanceResult {
  km?: number
  m?: number
  error?: string
}
