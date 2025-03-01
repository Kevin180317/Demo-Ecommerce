import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, total }) => {
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handlePurchase = () => {
    setShowForm(false);
  };

  const handleBuyAgain = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-50">
      {showForm ? (
        <>
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8 mr-6 space-y-6">
            <h1 className="text-3xl font-semibold text-center">Checkout</h1>
            <div className="space-y-4">
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Nombre"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Apellido"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Correo electrónico"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Dirección"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Ciudad"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="País"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Número de tarjeta de crédito"
                pattern="[0-9]{16}"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Fecha de vencimiento (MM/YY)"
                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                required
              />
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="CVV"
                pattern="[0-9]{3}"
                required
              />
            </div>
            <p className="text-xl font-semibold mt-4">Total: ${total}</p>
            <button
              onClick={handlePurchase}
              className="w-full p-3 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-200"
            >
              Pagar
            </button>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Resumen de la compra</h2>
            <ul className="space-y-4">
              {Object.entries(cart).map(([name, { quantity, image, price }]) => (
                <li
                  key={name}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={image}
                      alt={name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p>{name}</p>
                      <p>Cantidad: {quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">${price * quantity}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">¡Compra realizada con éxito!</h2>
          <button
            onClick={handleBuyAgain}
            className="w-full p-3 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-200"
          >
            Comprar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
