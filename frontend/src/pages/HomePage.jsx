import { useAuth } from "../context/AuthContext";
import { Card, Carrusel } from "../components/ui";

export const HomePage = () => {
  const data = useAuth();
  console.log(data)

  return (
    <div>

      <div className="hero-section">
      <div className="content">
        <h1 className="text-4xl font-bold">Z I L L A S</h1>
        <p className="text-lg">Un lugar para sent(a)rte</p>
        <button className="btn-primary">Ver más</button>
      </div>
    </div>

    <br></br>

      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          assumenda sed adipisci deleniti odit cumque, consectetur dolorum unde,
          quis iure numquam voluptas maxime enim! Rerum vel, nostrum saepe
          corporis fuga, deleniti fugit numquam necessitatibus sint blanditiis
          quaerat cupiditate quos suscipit earum et, aut labore magni quam.
          Eligendi aut ipsa deserunt quo nostrum deleniti maiores unde, a
          aliquam debitis iste error, hic illo et distinctio doloribus, ducimus
          consectetur officiis provident ut!
        </p>
      </Card>

      <br></br>

      <Carrusel />
    </div>
  );
};
