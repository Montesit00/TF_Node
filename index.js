/* const tf = require("@tensorflow/tfjs") */

/*  const tensor1 = tf.tensor([1.1, 2.2, 3.3], null, 'float32')
   console.log(tensor1);
   tensor1.print();
   
  const tensor2 = tf.tensor([[1,2],[3,4]]);
   console.log(tensor2);
   tensor2.print();

  const tensor3 = tf.tensor2d([[9.0, 25.0], [13.0, 34.0]]);
   console.log(tensor3);
tensor3.print(); */

const model = tf.sequential();

async function entrenar(){
  const x = parseInt((document.getElementById("ejex").value));
  const epocas = parseInt((document.getElementById("epocas").value));

  // Create a simple model.
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

  // Generate some synthetic data for training. (y = 2x - 1)
  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

  // Train the model using the data.
  await model.fit(xs, ys, {epochs: epocas});

  predecir(x)
}

const predecir = (x)=>{
  // Use the model to do inference on a data point the model hasn't seen.
  // Should print approximately 39.
  document.getElementById('micro-out-div').innerText =
    model.predict(tf.tensor2d([x], [1, 1])).dataSync();
  }



