import type { IBasketState, ICosmetic, IBasket } from '../types';

export const addCosmeticToBasket = (currentState: IBasketState, cosmetic: ICosmetic): IBasketState => {
  const existingItemIndex = currentState.items.findIndex(item => item.cosmetic.id === cosmetic.id);

  let newItems: IBasket[];

  if (existingItemIndex !== -1) {
    newItems = currentState.items.map((item, index) => {
      if (index === existingItemIndex) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
  } else {
    newItems = [...currentState.items, { cosmetic, count: 1 }];
  }

  return recalc(newItems);
};

export const increaseCosmeticCount = (state: IBasketState, cosmeticId: string): IBasketState => {
  const newItems = state.items.map(item =>
    item.cosmetic.id === cosmeticId
      ? { ...item, count: item.count + 1 }
      : item
  );

  return recalc(newItems);
};

export const decreaseCosmeticCount = (state: IBasketState, cosmeticId: string): IBasketState => {
  const newItems = state.items
    .map(item =>
      item.cosmetic.id === cosmeticId
        ? { ...item, count: item.count - 1 }
        : item
    )
    .filter(item => item.count > 0);

  return recalc(newItems);
};

const recalc = (items: IBasket[]): IBasketState => {
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.count * item.cosmetic.price, 0);

  return {
    items,
    totalCount,
    totalPrice
  };
};
