export class IAxios{
    method: string;
    url: string;
    data: IData
}

interface IData {
    userId: string,
    houseId: string,
    discountCode: string
}