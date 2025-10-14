import Partner from '../models/Partner';
import {Request, Response, NextFunction} from 'express';



// Создать нового покупателя

export const createPartners = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {

    try {
        const {shortName, inn, phone, contacts, roles} = req.body;
        // проверка на ИНН 
        const existingPartner = await Partner.findOne({inn});
        if (existingPartner) {
            res.status(400).json({
                success: false,
                message: 'Партнер с таким ИНН уже существует'
            });
            return;
        }
        // проверка ИНН

        const partner = await Partner.create({
            shortName,
            inn,
            phone,
            contacts,
            roles
        });

        res.status(200).json({
            success: true,
            data: partner
        })
    } catch (error) {
        next(error)
    }
}

// Получить всех партнеров

export const getPartners = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners);

    } catch (error) {
        next(error)
    }
}

// Редактировать карточку партнера

export const editPartner = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const {shortName, inn, phone, contacts, roles} = req.body;
        
    } catch (error) {
        
    }
}