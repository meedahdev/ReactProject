import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { AuthProvider } from "./Context/AuthContext"
import Layout from "./Layout/Layout"
import Dashboard from "./Pages/Dashboard"
import ProtectedRoute from "./Layout/ProtectedRoute"
import { UserProvider } from "./Context/UserContext"
import CosmeticDetail from "./Pages/CosmeticDetail"
import Search from "./Pages/Search"
import { CartProvider } from "./Context/CartContext"
import Cart from "./Pages/Cart"
import { SearchProvider } from "./Context/SeachContext"
import Products from "./Pages/Products"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <AuthProvider>
            <CartProvider>
            <SearchProvider>


              <Routes>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />

                <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cosmetic/:id" element={<CosmeticDetail />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/cart" element={<Cart />} />
                </Route>

              </Routes>
              </SearchProvider>
            </CartProvider>
          </AuthProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App