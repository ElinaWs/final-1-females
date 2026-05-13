import { centellaProducts, needlyProducts, boutijourProducts, collagenProducts } from './src/data/dataCard';
import * as fs from 'fs';

const tones = ['dark', 'tanned', 'light'];

const generateVariations = (products) => {
    const result = [];
    products.forEach(p => {
        // Randomly choose 1, 2 or 3 tones
        const numTones = Math.floor(Math.random() * 3) + 1;
        const selectedTones = [...tones].sort(() => 0.5 - Math.random()).slice(0, numTones);
        
        selectedTones.forEach(tone => {
            const toneLabel = tone === 'dark' ? 'темный' : tone === 'tanned' ? 'смуглый' : 'светлый';
            result.push({
                ...p,
                id: `${p.id}-${tone}`,
                name: `${p.name} (${toneLabel})`,
                skinTone: tone
            });
        });
    });
    return result;
};

const newCentella = generateVariations(centellaProducts);
const newNeedly = generateVariations(needlyProducts);
const newBoutijour = generateVariations(boutijourProducts);
const newCollagen = generateVariations(collagenProducts);

const content = `import type { ICosmetic } from "../types";

const commonIngredients = "Aqua (Water), Glycerin, Butylene Glycol, Propanediol, Niacinamide, Panthenol, Betaine, Allantoin, Sodium Hyaluronate, Camellia Sinensis Leaf Extract, Centella Asiatica Extract, Chamomilla Recutita (Chamomile) Flower Extract, Aloe Barbadensis Leaf Juice, Trehalose, Sodium PCA, Hydroxyethylcellulose, Carbomer, Arginine, Disodium EDTA, Ethylhexylglycerin, 1,2-Hexanediol, Phenoxyethanol.";

const commonReviews = [
    { userName: "Пользователь 1", stars: 5, text: "Очень легкий и приятный продукт. Кожа после него сразу выглядит более свежей и увлажненной, без липкости. Идеально подходит для утреннего ухода." },
    { userName: "Пользователь 2", stars: 5, text: "Пользуюсь уже пару недель — кожа стала заметно мягче и спокойнее. Ушли мелкие покраснения, появился естественный glow. Запах очень нежный и ненавязчивый." },
    { userName: "Пользователь 3", stars: 4, text: "Хороший базовый уход. Отлично увлажняет и быстро впитывается, но если кожа очень сухая, может понадобиться дополнительное питание. В целом — отличный вариант на каждый день." }
];

export const centellaProducts: ICosmetic[] = ${JSON.stringify(newCentella, null, 4)};

export const needlyProducts: ICosmetic[] = ${JSON.stringify(newNeedly, null, 4)};

export const boutijourProducts: ICosmetic[] = ${JSON.stringify(newBoutijour, null, 4)};

export const collagenProducts: ICosmetic[] = ${JSON.stringify(newCollagen, null, 4)};
`;

fs.writeFileSync('./src/data/dataCard.ts', content);
