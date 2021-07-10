type PetType = 'dog' | 'cat' | 'fish'
type Pet = {
    type: PetType,
    image: String,
    name: String,
    color: String,
    sex: String,

};

const data: Pet[]= [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'German Sheppard',
        color: 'Black and yellow',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador',
        color: 'white',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Yellow',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky',
        color: 'Black and white',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'White',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'White and yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persian',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Black and white',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Black, white and yellow',
        sex: 'Female'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Red and blue',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Red',
        sex: 'Male'
    },
    
]

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type); 
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    

}