const tf = require('@tensorflow/tfjs')

 const tensor = tf.tensor([1.1, 2.2, 3.3], null, 'float32')
   console.log(tensor);
   tensor.print();
   
   const tensor2 = tf.tensor([[1,2],[3,4]]);
   console.log(tensor2);
   tensor2.print();