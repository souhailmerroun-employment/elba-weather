export interface City {
    id: string,
    name: string
}

export interface CityFetchAction {
    type: 'fetch',
    payload: {
        data: City[]
    }
}

export interface CityAddAction {
    type: 'add',
    payload: {
        city: Omit<City, "id">
    }
}

/*export interface CityDeleteAction {
    type: 'delete',
    payload: {
        cityId: City['id']
    }
}

export interface CityRateAction {
    type: 'rate',
    payload: {
        cityId: City['id']
        rating: number
    }
}*/

export type CitiesAction =
    | CityFetchAction
    | CityAddAction