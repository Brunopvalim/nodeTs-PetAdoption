import { Request, Response } from "express";

import {createMenuObject} from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {

    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner: {
            title:"All animals",
            background:"allanimals.jpg"
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner: {
            title:"Dogs",
            background:"banner_dog.jpg"
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObject('cat'),
        banner: {
            title:"Cats",
            background:"banner_cat.jpg"
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner: {
            title:"Fishes",
            background:"banner_fish.jpg"
        }
    });
}