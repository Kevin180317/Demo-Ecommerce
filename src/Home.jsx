import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ addToCart }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAddToCart = (productName, productImage, productPrice) => {
    addToCart(productName, productImage, productPrice);
    setSelectedProducts([
      ...selectedProducts,
      { name: productName, image: productImage, price: productPrice },
    ]);
    toast.success(`${productName} agregado al carrito`);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { products: selectedProducts } });
    setDrawerOpen(false); // Esto asegura que el cajón se cierre al ir al checkout
  };

  return (
    <div className="flex flex-wrap items-start justify-center p-4 bg-gray-100">
      {selectedProducts.length > 0 && (
        <div
          className={`fixed right-0 top-0 h-full bg-gray-200 w-64 z-10 transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-xl font-bold p-4">Carrito</h2>
          <ul className="overflow-y-auto">
            {selectedProducts.map((product, index) => (
              <li key={index} className="flex items-center p-2 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 mr-2 object-cover"
                />
                <div>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="w-full mb-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            Pagar
          </button>
          <button
            className="w-full py-2 bg-red-500 text-white hover:bg-red-600"
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            Cerrar Carrito
          </button>
        </div>
      )}
      <button
        onClick={() => {
          if (selectedProducts.length === 0) {
            toast.error("El carrito está vacío");
          } else {
            toggleDrawer();
          }
        }}
        className="fixed top-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 z-20"
      >
        Ver Carrito
      </button>

      {/* Productos */}
      <div className="flex flex-wrap items-start justify-center py-16 ">
        <div className="flex flex-col items-center w-64 m-4 overflow-hidden bg-white rounded-md shadow-md">
          <img
            src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6569b4ad8a0f21ddf16f4368cefdc01b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
            alt="Producto 1"
            className="object-cover w-full h-64 transform hover:scale-110 transition-transform"
          />
          <div className="p-4">
            <h2 className="mt-2 text-xl font-bold">Producto 1</h2>
            <p className="mt-1 text-lg text-red-500">$100</p>
            <button
              onClick={() =>
                handleAddToCart(
                  "Producto 1",
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6569b4ad8a0f21ddf16f4368cefdc01b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
                  100
                )
              }
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-64 m-4 overflow-hidden bg-white rounded-md shadow-md">
          <img
            src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f42ddbb91e418c362f686e266189e673.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
            alt="Producto 2"
            className="object-cover w-full h-64 transform hover:scale-110 transition-transform"
          />
          <div className="p-4">
            <h2 className="mt-2 text-xl font-bold">Producto 2</h2>
            <p className="mt-1 text-lg text-red-500">$125</p>
            <button
              onClick={() =>
                handleAddToCart(
                  "Producto 2",
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f42ddbb91e418c362f686e266189e673.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
                  100
                )
              }
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-64 m-4 overflow-hidden bg-white rounded-md shadow-md">
          <img
            src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/aa48a1267b05a435b845a8658993b26a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
            alt="Producto 3"
            className="object-cover w-full h-64 transform hover:scale-110 transition-transform"
          />
          <div className="p-4">
            <h2 className="mt-2 text-xl font-bold">Producto 3</h2>
            <p className="mt-1 text-lg text-red-500">$150</p>
            <button
              onClick={() =>
                handleAddToCart(
                  "Producto 3",
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/aa48a1267b05a435b845a8658993b26a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
                  100
                )
              }
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        <Toaster position="top-left" />
      </div>
    </div>
  );
};

export default Home;
