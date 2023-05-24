export interface DashboardItemInterface {
    image: string;
    name: string;
    active: boolean;
    seller: string;
    price: string;
    id: string;
}

export interface BrowseItemInterface extends DashboardItemInterface {
    color: string;
}

export interface DataItemInterface {
    data: {
        image: string;
        name: string;
        seller: string;
        price: string;
        active: boolean;
        id: string;
        color: string;
        brand: string;
        category: string;
        description: string;
    };
}

export interface ItemParamsInterface {
    params: {
        id: string;
    };
}
