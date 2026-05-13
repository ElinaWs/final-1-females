import { Box, Container } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router"
import { Header } from "./components/header/header"
import { Home } from "./pages/home/home"
import { Cosmetic } from "./pages/cosmetic/cosmetic"
import { Basket } from "./pages/basket/Basket"
import { Profile } from "./pages/profile/Profile"
import { EditProfile } from "./pages/editProfile/EditProfile"
import { Payment } from "./pages/payment/Payment"
import { Register } from "./pages/register/Register"
import { Login } from "./pages/login/Login"
import { OrderSuccess } from "./pages/orderSuccess/OrderSuccess"
import { Wishlist } from "./pages/wishlist/Wishlist"
import { Footer } from "./components/footer/Footer"
import { AddCard } from "./pages/addCard/AddCard"
import { useState } from "react"
import type { IBasketState, ICosmetic, IUser, IOrder, SkinTone } from "./types"
import { addCosmeticToBasket, increaseCosmeticCount, decreaseCosmeticCount } from "./utils/CosmeticHelpers"

function App() {
  const [basket, setBasket] = useState<IBasketState>({
    items: [],
    totalCount: 0,
    totalPrice: 0
  })

  const [searchValue, setSearchValue] = useState('')
  const [selectedSkinTones, setSelectedSkinTones] = useState<SkinTone[]>([])
  const [user, setUser] = useState<IUser | null>(null)
  const [orders, setOrders] = useState<IOrder[]>([])

  const navigate = useNavigate()

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

  const handleOrder = (itemsToOrder: IBasketState['items']) => {
    if (itemsToOrder.length === 0) return;

    const newOrder: IOrder = {
      id: Math.random().toString(36).substr(2, 9),
      items: [...itemsToOrder],
      totalPrice: itemsToOrder.reduce((acc, item) => acc + item.cosmetic.price * item.count, 0),
      status: 'in-transit',
      date: new Date().toLocaleDateString()
    }
    setOrders(prev => [newOrder, ...prev])

    setBasket(prev => {
      const remainingItems = prev.items.filter(item =>
        !itemsToOrder.find(ordered => ordered.cosmetic.id === item.cosmetic.id)
      );
      const totalCount = remainingItems.reduce((acc, item) => acc + item.count, 0);
      const totalPrice = remainingItems.reduce((acc, item) => acc + item.cosmetic.price * item.count, 0);
      return { items: remainingItems, totalCount, totalPrice };
    });

    navigate('/order-success')
  }

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <Header
        totalCount={basket.totalCount}
        totalPrice={basket.totalPrice}
        onProfileClick={handleProfileClick}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        selectedSkinTones={selectedSkinTones}
        onSkinTonesChange={setSelectedSkinTones}
      />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          backgroundColor: '#FAF9F6',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ maxWidth: '1400px', margin: '0 auto', px: 4, py: 6 }}>
          <Routes>
            <Route path="/" element={<Home addCosmeticToBasket={handleAddCosmetic} searchValue={searchValue} selectedSkinTones={selectedSkinTones} />} />
            <Route path="/cosmetic/:id" element={<Cosmetic addCosmeticToBasket={handleAddCosmetic} />} />
            <Route path="/basket" element={<Basket basketState={basket}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onOrder={handleOrder}
              onClear={clearBasket} />} />
            <Route path="/profile" element={<Profile user={user} orders={orders} onOrderAgain={handleAddCosmetic} />} />
            <Route path="/profile/edit" element={<EditProfile user={user} setUser={setUser} />} />
            <Route path="/payment" element={<Payment user={user} setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/add-card" element={<AddCard />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default App