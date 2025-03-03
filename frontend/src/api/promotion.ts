import { api } from '../lib/axios'

export interface PromotionBody {
    id?: string
    name: string
    description: string
    discount: number
    startDate: Date
    endDate: Date
    menuItens: string[]
    restaurantId: string
}

export interface Promotion {
    id: string
    name: string
    description: string
    discount: number
    startDate: Date
    endDate: Date
    menuItens: string[]
    restaurantId: string
}

export async function getAllPromotionsFromRestaurant(restaurantId: string) {
    const response = api.get<Promotion[]>(
        `/promotion`
    )
    const promotions: Promotion[] = (await response).data
    return promotions.filter((promotion) => promotion.restaurantId === restaurantId)
}

export async function createPromotion(promotion: PromotionBody) {
    try{
        const response = await api.post('/promotion', {
            name: promotion.name,
            description: promotion.description,
            discount: promotion.discount,
            startDate: promotion.startDate,
            endDate: promotion.endDate,
            menuItens: promotion.menuItens,
            restaurantId: promotion.restaurantId,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export async function updatePromotion(promotion: PromotionBody) {
    try {
        const response = await api.patch(`/promotion/${promotion.id}`, {
            name: promotion.name,
            description: promotion.description,
            discount: promotion.discount,
            endDate: promotion.endDate,
        })
        return response.data
    } catch(error) {
        return error
    }
  }
  
  export async function deletePromotion(promotionId: string) {
    try{
        const response = await api.delete(`/promotion/${promotionId}`)
        return response.data
    } catch(error) {
        return error
    }
}
  