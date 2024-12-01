import { Edital, IEdital } from "../models/edital.model";

const create = async (payload: IEdital): Promise<any> =>{
    const edital = new Edital(payload);
    await edital.save();
    return edital;
};

const getAll = async (): Promise<any> =>{
    const edital = await Edital.find();
    return edital;
}

export {create, getAll};