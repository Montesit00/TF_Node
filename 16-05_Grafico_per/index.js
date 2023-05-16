//Entrenando tensores,prediciendo tarea 03-05
const model = tf.sequential();

async function entrenar(){
  const x = parseInt((document.getElementById("ejex").value));
  const epocas = parseInt((document.getElementById("epocas").value));

  // Create a simple model.
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

  // Generate some synthetic data for training. (y = 2x - 1)
  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4, 5], [7, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7, 9], [7, 1]);

  // Train the model using the data.
  //.fit admite tres parametros en este caso en el ultimo mostramos por clg la cantidad de perdidas
  await model.fit(xs, ys, {
    epochs: epocas,
    batchSize: 32,
    //Mostrar por consola las perdidas
    callbacks: tfvis.show.fitCallbacks({name: 'Training Performance'}, ['loss'])
  });

  predecir(x)
}

const predecir = (x)=>{
  // Use the model to do inference on a data point the model hasn't seen.
  // Should print approximately 39.
  document.getElementById('micro-out-div').innerText =
    model.predict(tf.tensor2d([x], [1, 1])).dataSync();
  }

// Ejemplo de uso de la librería tfjs-vis

/* async function getData() {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));
  
    return cleaned;
  }

  async function run() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    const values = data.map(d => ({
      x: d.horsepower,
      y: d.mpg,
    }));
  
    tfvis.render.scatterplot(
      {name: 'Horsepower v MPG'},
      {values},-
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
      }
    );
  
    // More code will be added below
  }
  
  document.addEventListener('DOMContentLoaded', run); */

