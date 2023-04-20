import { useState, useEffect, ReactNode, createContext, useContext } from 'react'
import { TFoodcourt } from "../lib/api/types"
import { FoodcourtService } from "../lib/api"

const FoodcourtContext = createContext<{
  foodcourt: TFoodcourt | null,
  foodcourts: TFoodcourt[],
  setFoodcourt: (foodcourt: TFoodcourt) => void 
}>({
  foodcourt: null,
  foodcourts: [],
  setFoodcourt: () => {}
})

export const useFoodcourt = () => useContext(FoodcourtContext)

export const FoodcourtProvider = ({ children }: {children: ReactNode}) => {
  const [foodcourts, setFoodcourts] = useState<TFoodcourt[]>([])
  const [foodcourt, setFoodcourt] = useState<TFoodcourt | null>(null)

  useEffect(() => {
    const getFoodcourts =  async () => {
      const _foodcourts = await FoodcourtService.getFoodcourts()
      setFoodcourts(_foodcourts)
    }

    getFoodcourts()
  }, [])

  return (
    <FoodcourtContext.Provider value={{
      foodcourt, 
      foodcourts,
      setFoodcourt
    }}>
      { children }
    </FoodcourtContext.Provider>
  )
}

export default FoodcourtProvider