export type EventModel = {
    id?:number;
    name: string;
    date: Date;
    onSale: boolean;
}


export type EventGet = {
    id: number;
    attributes: EventModel;
};