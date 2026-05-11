import { Container } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "./components/header/header"
import { Home } from "./pages/home/home"
import { Cosmetic } from "./pages/cosmetic/cosmetic"
import { AddCosmetic } from "./pages/addCosmetic/addCosmetic"

function App() {

  return (
    <>
      <Header />
      <Container style={{
        padding: "20px"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmetic/:id" element={<Cosmetic />} />
          <Route path="/cosmetic/create" element={<AddCosmetic />} />
        </Routes>
      </Container>

    </>
  )
}

export default App