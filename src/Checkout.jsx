import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, total }) => {
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Ocultar el formulario al hacer clic en "Pagar"
    setShowForm(false);
    // Podrías agregar aquí la lógica para procesar el pago si lo necesitas
  };

  const handleBuyAgain = () => {
    // Redirigir al usuario a la ruta "/" al hacer clic en "Comprar de nuevo"
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center h-screen p-4">
      {showForm ? ( // Mostrar el formulario si showForm es true
        <>
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 mr-4">
            <h1 className="text-2xl mb-4">Checkout</h1>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Nombre"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Apellido"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="email"
                placeholder="Correo electrónico"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Dirección"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Ciudad"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="País"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Número de tarjeta de crédito"
                pattern="[0-9]{16}"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Fecha de vencimiento (MM/YY)"
                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                required
              />
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="CVV"
                pattern="[0-9]{3}"
                required
              />
            </div>
            <p className="text-xl mt-4">Total: ${total}</p>
            <button
              onClick={handlePurchase}
              className="w-full p-2 bg-blue-500 text-white rounded mt-4"
            >
              Pagar
            </button>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl mb-4">Resumen de la compra</h2>
            <ul className="space-y-2">
              {Object.entries(cart).map(
                ([name, { quantity, image, price }]) => (
                  <li
                    key={name}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded"
                  >
                    <div className="flex items-center">
                      <img
                        src={image}
                        alt={name}
                        className="w-10 h-10 object-cover rounded mr-2"
                      />
                      <div>
                        <p>{name}</p>
                        <p>Cantidad: {quantity}</p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">${price * quantity}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      ) : (
        // Mostrar el ticket y el botón "Comprar de nuevo" si showForm es false
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl mb-4">¡Compra realizada con éxito!</h2>
          {/* Aquí mostrarías el ticket de compra con los detalles */}
          <button
            onClick={handleBuyAgain}
            className="w-full p-2 bg-blue-500 text-white rounded mt-4"
          >
            Comprar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
