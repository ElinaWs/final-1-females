import type { ICosmetic } from "../types";

const commonIngredients = "Aqua (Water), Glycerin, Butylene Glycol, Propanediol, Niacinamide, Panthenol, Betaine, Allantoin, Sodium Hyaluronate, Camellia Sinensis Leaf Extract, Centella Asiatica Extract, Chamomilla Recutita (Chamomile) Flower Extract, Aloe Barbadensis Leaf Juice, Trehalose, Sodium PCA, Hydroxyethylcellulose, Carbomer, Arginine, Disodium EDTA, Ethylhexylglycerin, 1,2-Hexanediol, Phenoxyethanol.";

const commonReviews = [
    { userName: "Пользователь 1", stars: 5, text: "Очень легкий и приятный продукт. Кожа после него сразу выглядит более свежей и увлажненной, без липкости. Идеально подходит для утреннего ухода." },
    { userName: "Пользователь 2", stars: 5, text: "Пользуюсь уже пару недель — кожа стала заметно мягче и спокойнее. Ушли мелкие покраснения, появился естественный glow. Запах очень нежный и ненавязчивый." },
    { userName: "Пользователь 3", stars: 4, text: "Хороший базовый уход. Отлично увлажняет и быстро впитывается, но если кожа очень сухая, может понадобиться дополнительное питание. В целом — отличный вариант на каждый день." }
];

export const centellaProducts: ICosmetic[] = [
    { id: '1-light', skinTone: 'light', name: '"Centella" крем для рук (светлый), 150 гр', price: 350, description: 'Восстанавливающий крем для рук с экстрактом центеллы азиатской.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '1-tanned', skinTone: 'tanned', name: '"Centella" крем для рук (смуглый), 150 гр', price: 350, description: 'Восстанавливающий крем для рук с экстрактом центеллы азиатской.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '2-dark', skinTone: 'dark', name: 'Парфюмированный гель для душа (темный), 350 мл', price: 500, description: 'Очищающий гель для душа с изысканным ароматом.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '2-tanned', skinTone: 'tanned', name: 'Парфюмированный гель для душа (смуглый), 350 мл', price: 500, description: 'Очищающий гель для душа с изысканным ароматом.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '3-light', skinTone: 'light', name: 'Гель для умывания с маслом Ши (светлый), 150 мл', price: 420, description: 'Мягкое очищающее средство для лица.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '3-dark', skinTone: 'dark', name: 'Гель для умывания с маслом Ши (темный), 150 мл', price: 420, description: 'Мягкое очищающее средство для лица.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '4-light', skinTone: 'light', name: 'Увлажняющий мусс для тела (светлый), 300 мл', price: 800, description: 'Невесомый мусс с текстурой взбитых сливок.', ingredients: commonIngredients, reviews: commonReviews },
];

export const needlyProducts: ICosmetic[] = [
    { id: '5-light', skinTone: 'light', name: 'Ночная сыворотка для лица (светлый), 30 мл', price: 520, description: 'Концентрированная сыворотка.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '5-tanned', skinTone: 'tanned', name: 'Ночная сыворотка для лица (смуглый), 30 мл', price: 520, description: 'Концентрированная сыворотка.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '5-dark', skinTone: 'dark', name: 'Ночная сыворотка для лица (темный), 30 мл', price: 520, description: 'Концентрированная сыворотка.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '6-tanned', skinTone: 'tanned', name: 'Энзимная пудра для умывания (смуглый), 40 гр', price: 370, description: 'Инновационное средство.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '6-dark', skinTone: 'dark', name: 'Энзимная пудра для умывания (темный), 40 гр', price: 370, description: 'Инновационное средство.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '7-light', skinTone: 'light', name: 'Сыворотка с маслом Ши (светлый), 50 мл', price: 340, description: 'Питательная сыворотка.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '8-dark', skinTone: 'dark', name: 'Крем для лица SPF 50+ (темный), 75 мл', price: 960, description: 'Максимальная защита от солнца.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '8-tanned', skinTone: 'tanned', name: 'Крем для лица SPF 50+ (смуглый), 75 мл', price: 960, description: 'Максимальная защита от солнца.', ingredients: commonIngredients, reviews: commonReviews },
];

export const boutijourProducts: ICosmetic[] = [
    { id: '9-light', skinTone: 'light', name: 'Скраб с морской солью (светлый), 120 гр', price: 610, description: 'Минеральный скраб.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '9-tanned', skinTone: 'tanned', name: 'Скраб с морской солью (смуглый), 120 гр', price: 610, description: 'Минеральный скраб.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '9-dark', skinTone: 'dark', name: 'Скраб с морской солью (темный), 120 гр', price: 610, description: 'Минеральный скраб.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '10-light', skinTone: 'light', name: 'Глиняная маска для лица (светлый), 120 гр', price: 470, description: 'Маска для проблемной кожи.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '11-tanned', skinTone: 'tanned', name: 'Успокаивающий крем для лица (смуглый), 150 мл', price: 340, description: 'Легкий крем-гель.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '11-dark', skinTone: 'dark', name: 'Успокаивающий крем для лица (темный), 150 мл', price: 340, description: 'Легкий крем-гель.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '12-light', skinTone: 'light', name: 'Туалетная вода (светлый), 50 мл', price: 920, description: 'Элегантный аромат.', ingredients: commonIngredients, reviews: commonReviews },
];

export const collagenProducts: ICosmetic[] = [
    { id: '13-light', skinTone: 'light', name: 'Крем для лица с керамидами (светлый), 50 мл', price: 610, description: 'Защитный крем.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '13-dark', skinTone: 'dark', name: 'Крем для лица с керамидами (темный), 50 мл', price: 610, description: 'Защитный крем.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '14-tanned', skinTone: 'tanned', name: 'Дневной крем для лица (смуглый), 100 мл', price: 570, description: 'Базовый увлажняющий крем.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '15-light', skinTone: 'light', name: 'Маска для лица (светлый), 120 мл', price: 390, description: 'Экспресс-маска.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '15-tanned', skinTone: 'tanned', name: 'Маска для лица (смуглый), 120 мл', price: 390, description: 'Экспресс-маска.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '15-dark', skinTone: 'dark', name: 'Маска для лица (темный), 120 мл', price: 390, description: 'Экспресс-маска.', ingredients: commonIngredients, reviews: commonReviews },
    { id: '16-dark', skinTone: 'dark', name: 'Ночной крем для лица (темный), 150 мл', price: 740, description: 'Насыщенный крем.', ingredients: commonIngredients, reviews: commonReviews },
];
