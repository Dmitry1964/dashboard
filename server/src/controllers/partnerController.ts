import Partner from '../models/Partner';
import {Request, Response, NextFunction} from 'express';



// Создать нового покупателя

export const createBayers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {

    try {
        const {shortName, inn, phone, contacts} = req.body;
        // проверка на ИНН 

        // проверка ИНН

        const partner = await Partner.create({
            shortName,
            inn,
            phone,
            contacts
        });

        res.status(200).json({
            success: true,
            data: partner
        })
    } catch (error) {
        next(error)
    }
}