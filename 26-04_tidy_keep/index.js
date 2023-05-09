/* PROBANDO TENSOR CON NODE */
/* Para probar el codigo haga node index.js */

const tf = require("@tensorflow/tfjs")

 const tensor1 = tf.tensor([1.1, 2.2, 3.3], null, 'float32')
   console.log(tensor1);
   tensor1.print();
   
  const tensor2 = tf.tensor([[1,2],[3,4]]);
   console.log(tensor2);
   tensor2.print();

  const tensor3 = tf.tensor2d([[9.0, 25.0], [13.0, 34.0]]);
   console.log(tensor3);
tensor3.print();