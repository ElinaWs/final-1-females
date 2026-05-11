import type { ICosmetic } from "../types";

const commonIngredients = "Aqua (Water), Glycerin, Butylene Glycol, Propanediol, Niacinamide, Panthenol, Betaine, Allantoin, Sodium Hyaluronate, Camellia Sinensis Leaf Extract, Centella Asiatica Extract, Chamomilla Recutita (Chamomile) Flower Extract, Aloe Barbadensis Leaf Juice, Trehalose, Sodium PCA, Hydroxyethylcellulose, Carbomer, Arginine, Disodium EDTA, Ethylhexylglycerin, 1,2-Hexanediol, Phenoxyethanol.";

const commonReviews = [
    { userName: "Пользователь 1", stars: 5, text: "Очень легкий и приятный продукт. Кожа после него сразу выглядит более свежей и увлажненной, без липкости. Идеально подходит для утреннего ухода." },
    { userName: "Пользователь 2", stars: 5, text: "Пользуюсь уже пару недель — кожа стала заметно мягче и спокойнее. Ушли мелкие покраснения, появился естественный glow. Запах очень нежный и ненавязчивый." },
    { userName: "Пользователь 3", stars: 4, text: "Хороший базовый уход. Отлично увлажняет и быстро впитывается, но если кожа очень сухая, может понадобиться дополнительное питание. В целом — отличный вариант на каждый день." }
];

export const centellaProducts: ICosmetic[] = [
    { 
        id: '1', 
        name: '"Centella" крем для рук, 150 гр', 
        price: 350, 
        description: 'Восстанавливающий крем для рук с экстрактом центеллы азиатской. Глубоко питает, заживляет микротрещины и защищает нежную кожу рук от негативного воздействия окружающей среды. Обладает легким травянистым ароматом.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '2', 
        name: 'Парфюмированный гель для душа, 350 мл', 
        price: 500, 
        description: 'Очищающий гель для душа с изысканным ароматом. Мягко удаляет загрязнения, не пересушивая кожу. Оставляет после себя тонкий шлейф дорогого парфюма и ощущение абсолютной свежести.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '3', 
        name: 'Гель для умывания с маслом Ши, 150 мл', 
        price: 420, 
        description: 'Мягкое очищающее средство для лица. Масло ши в составе предотвращает стянутость и шелушение, а легкая пена деликатно удаляет макияж и излишки себума. Подходит для сухой и чувствительной кожи.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '4', 
        name: 'Увлажняющий мусс для тела, 300 мл', 
        price: 800, 
        description: 'Невесомый мусс с текстурой взбитых сливок. Мгновенно впитывается, даря коже бархатистость и глубокое увлажнение на весь день. Экстракт лотоса успокаивает и выравнивает тон кожи.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
];

export const needlyProducts: ICosmetic[] = [
    { 
        id: '5', 
        name: 'Ночная сыворотка для лица, 30 мл', 
        price: 520, 
        description: 'Концентрированная сыворотка для интенсивного восстановления кожи во время сна. Стимулирует процессы регенерации, разглаживает мелкие морщинки и придает лицу отдохнувший вид к утру.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '6', 
        name: 'Энзимная пудра для умывания, 40 гр', 
        price: 370, 
        description: 'Инновационное средство для глубокого очищения. Энзимы папайи мягко отшелушивают ороговевшие клетки, очищают поры и выравнивают микрорельеф кожи без агрессивного воздействия.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '7', 
        name: 'Сыворотка с маслом Ши, 50 мл', 
        price: 340, 
        description: 'Питательная сыворотка для экстремально сухой кожи. Создает защитный барьер, удерживающий влагу, и возвращает лицу здоровое сияние и эластичность. Идеально для зимнего периода.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '8', 
        name: 'Крем для лица SPF 50+, 75 мл', 
        price: 960, 
        description: 'Максимальная защита от солнца и фотостарения. Легкая текстура не выбеливает лицо и не оставляет липкости. Содержит антиоксиданты для борьбы со свободными радикалами.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
];

export const boutijourProducts: ICosmetic[] = [
    { 
        id: '9', 
        name: 'Скраб с морской солью, 120 гр', 
        price: 610, 
        description: 'Минеральный скраб для обновления кожи тела. Морская соль в сочетании с натуральными маслами обеспечивает отличный лимфодренажный эффект и делает кожу невероятно гладкой.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '10', 
        name: 'Глиняная маска для лица с экстрактом полыни, 120 гр', 
        price: 470, 
        description: 'Маска для проблемной и комбинированной кожи. Каолин глубоко очищает поры, а экстракт полыни снимает воспаления и регулирует выработку кожного сала.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '11', 
        name: 'Успокаивающий крем для лица, 150 мл', 
        price: 340, 
        description: 'Легкий крем-гель для быстрого снятия раздражения. Мгновенно охлаждает, устраняет чувство жжения и стянутости после пребывания на солнце или активных процедур.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '12', 
        name: 'Туалетная вода с цветочным нотами, 50 мл', 
        price: 920, 
        description: 'Элегантный аромат, раскрывающийся нотами жасмина, лотоса и белого чая. Подчеркивает индивидуальность и создает атмосферу весеннего сада в любое время года.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
];

export const collagenProducts: ICosmetic[] = [
    { 
        id: '13', 
        name: 'Крем для лица с керамидами, 50 мл', 
        price: 610, 
        description: 'Защитный крем для восстановления липидного барьера. Керамиды помогают коже удерживать влагу и защищают от агрессивных факторов внешней среды.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '14', 
        name: 'Дневной крем для лица, 100 мл', 
        price: 570, 
        description: 'Базовый увлажняющий крем на каждый день. Прекрасно подходит в качестве базы под макияж, обеспечивая увлажнение в течение 24 часов без жирного блеска.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '15', 
        name: 'Маска для лица, 120 мл', 
        price: 390, 
        description: 'Экспресс-маска для мгновенного преображения. Стирает следы усталости, наполняет кожу влагой и возвращает лицу здоровый цвет всего за 10 минут применения.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
    { 
        id: '16', 
        name: 'Ночной крем для лица, 150 мл', 
        price: 740, 
        description: 'Насыщенный крем для глубокого питания во время сна. Пока вы отдыхаете, активные компоненты работают над восстановлением тонуса и упругости вашей кожи.', 
        ingredients: commonIngredients,
        reviews: commonReviews
    },
];
