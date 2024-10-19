import logocreditagricole from '../../../ressources/creditagricoleloogo.jpg';
import ouifmlogo from '../../../ressources/ouifmlogo.png';
import iledefrancelogo from '../../../ressources/iledefrancelogo.svg-3780041484.png';
import fnaclogo from '../../../ressources/fnaclogo.jpeg';
import leparisienlogo from '../../../ressources/Le-Parisien-logo-1024x773-2442362953.png';
const partenairesListe = [
    {
        id: 1,
        nom: 'Le Parisien',
        desc: 'Le Parisien est un journal quotidien français fondé en 1944 à Paris. Il est édité par le Groupe Les Échos-Le Parisien. Il est diffusé en Île-de-France et dans l’Oise.', 
        logo: leparisienlogo,
        lien: 'https://www.leparisien.fr/'

    },

    {
        id: 2,  
        nom: 'FNAC',
        desc: 'La Fnac est une chaîne de magasins française spécialisée dans la distribution de produits culturels et électroniques. Fondée en 1954, elle est présente en France et en Suisse.',
        logo: fnaclogo,
        lien: 'https://www.fnac.com/'

    },
    
    {
        id: 3,
        nom:'Oui FM',
        desc: 'OUI FM est une station de radio rock française créée en 1987. Elle est diffusée à Paris et en Île-de-France, ainsi que dans plusieurs villes de province.',
        logo: ouifmlogo,
        lien: 'https://www.ouifm.fr/'
    },

    {
        id : 4,
        nom: "Région ile de France",
        desc: "La région Île-de-France est une collectivité territoriale française, située dans la région historique et culturelle de l'Île-de-France.",
        logo: iledefrancelogo,
    },

    {
        id: 5,
        nom: "Crédit Agricole",
        desc: "Le Crédit Agricole donne le La à Nation Sounds. Partenaire de l'événement, la banque a accompagné l'équipe dans la réalisation de ce projet.",
        logo: logocreditagricole,
    }

];

export default partenairesListe;