import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes";
import { NavBar } from "./components";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("cars"));
  if (storageCars) {
    loadLocalStorageFiles(storageCars);
  } else {
    storageCars = [];
  }
  const [cars, setCars] = useState(storageCars);

  let storageWishes = JSON.parse(localStorage.getItem("wishes"));
  if (storageWishes) {
    loadLocalStorageFiles(storageWishes);
  } else {
    storageWishes = [];
  }
  const [wishes, setWishes] = useState(storageWishes);

  //Função: buscar as imagens armazenadas em dataUrl, de cada posição do array.
  //Parâmetro:
  //  array: variavel onde a imagem foi armazenada.
  function loadLocalStorageFiles(array) {
    //Para cada posição do array, chama a função de que retorna a imagem convertida para blob.
    array.forEach((arr) => {
      if (arr.image) {
        arr.image = dataURLtoBlob(arr.file);
      }
    });
  }

  //Função: converte as imagens armazenadas em dataUrl, para blob. Sendo assim, será possível mostrar essas imagens vindas do localStorage;
  //Parâmetro:
  //  dataurl: imagem a ser convertida de dataURL para blob.
  function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  const handleAddCar = (car) => setCars([...cars, car]);

  const handleDeleteCar = (id) => setCars(cars.filter((car) => car.id !== id));

  const handleChangeCar = (car, id) => {
    const i = cars.findIndex((c) => c.id === id);
    const newList = [...cars];
    newList[i] = car;
    setCars(newList);
  };

  const handleAddWish = (wish) => setWishes([...wishes, wish]);

  const handleDeleteWish = (id) =>
    setWishes(wishes.filter((wish) => wish.id !== id));

  const handleChangeWish = (wish, id) => {
    const i = wishes.findIndex((w) => w.id === id);
    const newList = [...wishes];
    newList[i] = wish;
    setWishes(newList);
  };

  useEffect(() => {
    console.log(cars);
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    console.log(wishes);
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  return (
    <div className="App">
      <Router>
        <MainRoutes
          cars={cars}
          wishes={wishes}
          onAddCar={handleAddCar}
          onDeleteCar={handleDeleteCar}
          onChangeCar={handleChangeCar}
          onAddWish={handleAddWish}
          onDeleteWish={handleDeleteWish}
          onChangeWish={handleChangeWish}
        />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
