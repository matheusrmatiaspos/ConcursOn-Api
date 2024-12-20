import { Request, Response } from "express";
import { EditalRequestDTO, EditalResponseDTO } from "../types/edital.type";
import { IEdital } from "../models/edital.model";
import {create, getAll} from "../repositories/edital.repository";

const criaEdital = async (req: Request, res: Response):Promise<any> =>{
    try{
        const editalRequest: EditalRequestDTO = req.body;
        const iEdital: IEdital = {
            numero: editalRequest.numero,
            municipio: editalRequest.municipio,
            empregos: editalRequest.empregos
        };

        const edital = await create(iEdital);

        const editalResponse: EditalResponseDTO = {
            id:edital._id,
            numero: edital.numero,
            municipio: edital.municipio,
            empregos: edital.empregos
        }

        return res.status(200).send(editalResponse);
        
    } catch(err){
        return res.status(500).send(err);
    }
};

const listaEditais = async (req: Request, res: Response):Promise<any> =>{
    try{
        const editais = await getAll();
        const editaisResponse : Array<EditalResponseDTO> = editais.map((edital:any)=>({
            id:edital.id,
            numero:edital.numero,
            municipio:edital.municipio,
            empregos: edital.empregos
        }));

    return res.status(200).send(editaisResponse)

    }catch (err){
        return res.status(500).send(err);
    }
}

export {criaEdital, listaEditais};