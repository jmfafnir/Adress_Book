import { Request, Response} from "express"
import { Sequelize, where } from "sequelize/types";
import Contact from "../models/contact";
import User from "../models/user"

export const getContacts = async(req: Request, res: Response) => {

    const contact = await Contact.findAll();

    res.json({contact})
} 

export const getContactByName = async(req: Request, res: Response) => {

    const {name} = req.params;

    const contacts = await Contact.findAll({
        where : {
            name : name
        }
    });

    if(contacts.length != 0){
        res.json({contacts});
    }else{
        res.status(404).json({
            msg: `No se encuentra al contacto con el nombre ${name}`
        })
    }
   
    
} 

export const getContactByPhone = async(req: Request, res: Response) => {

    const {name,phone} = req.query;

    const { Op } = require("sequelize");
    const contacts = await Contact.findAll({
        where : {
            [Op.or]: [
            {name: "sdf"},
            {cell_phone_number: 1123}
        ]}
    });
   
    res.json({contacts})
} 

export const postContact = async(req: Request, res: Response) => {

    const {body} = req;

    try {
        
        const existEmail = await Contact.findOne({
            where: {
                cell_phone_number: body.cell_phone_number
            }
        });

        if(existEmail){
            return res.status(400).json({
                msg: `Este contacto con numero ${body.cell_phone_number}  ya existe`
            })
        }

        const contact = Contact.build(body);
        await contact.save();

        res.json(contact);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Se perdio la conecion con la base de datos'
        })
    }
    
} 

export const putContact = async(req: Request, res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        
        const existContact = await Contact.findByPk(id);

        if(!existContact){
            return res.status(404).json({
                msg: `Este contacto con celular ${body.cell_phone_number}  no existe`
            })
        }

        
        await existContact.update(body);

        res.json(existContact);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Se perdio la conecion con la base de datos'
        })
    }
} 

export const deleteContact = async(req: Request, res: Response) => {

    const {id} = req.params;

    try {
        
        const existContact = await Contact.findByPk(id);

        if(!existContact){
            return res.status(404).json({
                msg: `Este contacto con id ${id}  no existe`
            })
        }

        
        await existContact.destroy();

        res.json(existContact);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Se perdio la conecion con la base de datos'
        })
    }
} 

