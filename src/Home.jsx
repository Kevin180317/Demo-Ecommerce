import { useState } from "react";
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
    setDrawerOpen(false); // Cierra el cajón al ir al checkout
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Carrito Drawer */}
      {selectedProducts.length > 0 && (
        <div
          className={`fixed right-0 top-0 h-full bg-gray-800 bg-opacity-90 w-80 z-20 transition-transform transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } duration-300 ease-in-out`}
        >
          <h2 className="text-2xl font-semibold text-white p-4">Carrito</h2>
          <ul className="overflow-y-auto p-2">
            {selectedProducts.map((product, index) => (
              <li key={index} className="flex items-center p-3 border-b border-gray-600 text-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 mr-4 object-cover rounded-lg"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 space-y-2">
            <button
              onClick={handleCheckout}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Pagar
            </button>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Cerrar Carrito
            </button>
          </div>
        </div>
      )}

      {/* Button to open cart */}
      <button
        onClick={() => {
          if (selectedProducts.length === 0) {
            toast.error("El carrito está vacío");
          } else {
            toggleDrawer();
          }
        }}
        className="fixed bottom-10 right-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-30"
      >
        Ver Carrito
      </button>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-screen-xl w-full">
        {["Producto 1", "Producto 2", "Producto 3"].map((productName, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
          >
            <img
              src={`https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/${index === 0 ? "6569b4ad8a0f21ddf16f4368cefdc01b" : index === 1 ? "f42ddbb91e418c362f686e266189e673" : "aa48a1267b05a435b845a8658993b26a"}.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp`}
              alt={productName}
              className="object-cover w-full h-64 rounded-lg transition-transform transform hover:scale-105 duration-300"
            />
            <div className="mt-4 space-y-2 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">{productName}</h2>
              <p className="text-lg text-red-500">${100}</p>
              <button
                onClick={() =>
                  handleAddToCart(
                    productName,
                    `https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/${index === 0 ? "6569b4ad8a0f21ddf16f4368cefdc01b" : index === 1 ? "f42ddbb91e418c362f686e266189e673" : "aa48a1267b05a435b845a8658993b26a"}.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp`,
                    100
                  )
                }
                className="w-full px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
