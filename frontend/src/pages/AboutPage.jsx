import { Card } from "../components/ui";

export const AboutPage = () => {
  return (
<>
    <div className="mt-10">
      <Card>
        <h1 className="text-3xl font-bold my-4 text-center">¿Qué es ZALIS?</h1>
        <p className="text-center">En el mundo actual, el costo de los libros nuevos puede ser una barrera significativa para muchos lectores. Además, la sobreproducción de libros nuevos tiene un impacto ambiental considerable. Los lectores buscan soluciones que sean tanto económicas como sostenibles.
        ZALIS ofrece una amplia gama de libros usados de alta calidad, permitiendo a los usuarios ahorrar al menos un 30% en comparación con los precios de los libros nuevos. Cada libro es cuidadosamente revisado para garantizar su buen estado, proporcionando una experiencia de lectura óptima a un costo reducido.
        </p>
      </Card>
    </div>

        
    <div className="mt-10">
    <Card>
      <h1 className="text-3xl font-bold my-4 text-center text-sky-500 ">Ventajas de ZALIS</h1>
      <ul className="text-center">
        <li className="pt-5"><strong className="text-sky-500  text-xl">Ahorro Significativo</strong></li>
        <li>Todos los libros en ZALIS se venden con un descuento mínimo del 30% respecto al precio de un libro nuevo.</li>
        <li className="pt-5"><strong className="text-sky-500  text-xl">Calidad Garantizada</strong> </li>
        <li>Cada libro pasa por un riguroso proceso de inspección para asegurar que esté en condiciones óptimas.</li>
        <li className="pt-5"><strong className="text-sky-500  text-xl">Sostenibilidad</strong></li>
        <li>Al comprar libros usados, los usuarios contribuyen a la reducción de la demanda de nuevos productos, ayudando a disminuir el impacto ambiental.</li>
        <li className="pt-5"><strong className="text-sky-500  text-xl">Amplia Selección</strong></li>
        <li>Nuestra app ofrece una vasta colección de títulos en diversos géneros, desde bestsellers hasta obras clásicas.</li>
        <li className="pt-5"><strong className="text-sky-500  text-xl">Facilidad de Uso</strong></li>
        <li>La plataforma de ZALIS es intuitiva y fácil de navegar, permitiendo a los usuarios encontrar y comprar libros rápidamente.</li>
      </ul>
    </Card>
    </div>

</>
    
  );
};
