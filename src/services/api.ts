import axios from 'axios'
import { API_URL } from '@/constants'
import type { Vehicle, VehicleDetail } from '@/types/vehicle.ts'

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const handleError = (error: unknown, message: string) => {
  if (axios.isAxiosError(error)) {
    console.error(`${message} Axios error:`, error.response?.data || error.message)
  } else {
    console.error(`${message} Unexpected error:`, error)
  }
  throw new Error(message)
}

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await apiClient.get('/vehicles')
    return response.data
  } catch (error) {
    handleError(error, 'Failed to fetch vehicles')
    throw error
  }
}

export const fetchVehicleDetail = async (id: string): Promise<VehicleDetail> => {
  if (!id) {
    throw new Error('Vehicle ID is required to fetch details')
  }
  try {
    const response = await apiClient.get(`/vehicles/${id}`)
    return response.data
  } catch (error) {
    handleError(error, `Failed to fetch vehicle detail for ID: ${id}`)
    throw error
  }
}
