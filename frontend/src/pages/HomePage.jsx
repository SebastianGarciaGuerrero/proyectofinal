import { AuthContext } from "../context/AuthProvider";
import { Carrusel } from "../components/ui";
import { useContext } from "react";


export const HomePage = () => {
  const data = useContext(AuthContext);
  console.log(data)

  return (
    <div>

      <div className="hero-section">
      <div className="content">
        <h1 className="text-4xl font-bold">Z A L I S</h1>
        <p className="text-lg">Libros usados al mejor precio</p>
        {/* <button className="btn-primary">Ver más</button> */}
      </div>
    </div>

    <br></br>

      <br></br>

      <Carrusel />
    </div>

  );
};
