import { IEdital, Edital } from "../models/edital.model";

const create = async (payload: IEdital): Promise<IEdital> =>{
    const edital = new Edital(payload);
    await edital.save();
    return edital;
};

export {create};