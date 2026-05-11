import { Container } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "./components/header/header"
import { Home } from "./pages/home/home"
import { Cosmetic } from "./pages/cosmetic/cosmetic"
import { AddCosmetic } from "./pages/addCosmetic/addCosmetic"
import { EditCosmetic } from "./pages/editCosmetic/EditCosmetic"
import { Basket } from "./pages/basket/Basket"
import { useState } from "react"
import type { IBasketState, ICosmetic } from "./types"
import { addCosmeticToBasket, increaseCosmeticCount, decreaseCosmeticCount } from "./utils/CosmeticHelpers"

function App() {
  const [basket, setBasket] = useState<IBasketState>({
    items: [],
    totalCount: 0,
    totalPrice: 0
  })

  const handleIncrease = (id: string) => {
    setBasket(prev => increaseCosmeticCount(prev, id));
  };

  const handleDecrease = (id: string) => {
    setBasket(prev => decreaseCosmeticCount(prev, id));
  };

  const clearBasket = () => {
    setBasket({
      items: [],
      totalCount: 0,
      totalPrice: 0
    });
  };

  const handleAddCosmetic = (cosmetic: ICosmetic) => {
    setBasket(prev => addCosmeticToBasket(prev, cosmetic));
  };

  return (
    <>
      <Header totalCount={basket.totalCount} totalPrice={basket.totalPrice} />
      <Container style={{
        padding: "20px"
      }}>
        <Routes>
          <Route path="/" element={<Home addCosmeticToBasket={handleAddCosmetic} />} />
          <Route path="/cosmetic/:id" element={<Cosmetic />} />
          <Route path="/cosmetic/create" element={<AddCosmetic />} />
          <Route path="/cosmetic/edit/:id" element={<EditCosmetic />} />
          <Route path="/basket" element={<Basket basketState={basket}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            clearBasket={clearBasket} />} />
        </Routes>
      </Container>

    </>
  )
}

export default App