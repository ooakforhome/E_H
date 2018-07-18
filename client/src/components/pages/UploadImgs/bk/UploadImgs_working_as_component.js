import React from "react";
import API from "../../../utils/API";

// _handleImageChange(e) {
//   e.preventDefault();
//     this.setState({
//       file: e.target.files[0]
//     });
// }

const handleSubmit = e => {
  e.preventDefault();
  let formData = new FormData();
  formData.append('file', e.target.files[0]);
  API.uploadthis(formData)
  console.log(formData);
  // e.target.reset()
}

export const UploadImg = (
      <div>
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit} >
          <input
            className="fileInput inlineBlk"
            type="file"
            name= "photo"
            id="file" />
           <button
             className="saveBtn inlineBlk"
             type="submit">
                save
           </button>
        </form>
      </div>
    )


//----
// http://javasampleapproach.com/node-js/mongoose-many-to-many-related-models-with-nodejs-express-mongodb
//
// // Add Subject to MongoDB
//   var math = new Subject({
// 	  code: 'M-01',
// 	  name: 'Mathematics'
//   });
//
//   var computer = new Subject({
// 	 code: "C-02",
// 	 name: 'Computer'
//   });
//
//   math.save(function (err){
// 	 if(err) return console.error(err.stack)
// 	 console.log("Math is added")
//   });
//
//   computer.save(function(err){
// 	  if(err) return console.error(err.stack);
// 	  console.log("Computer is added")
//   })
//
//   // Add Student to MongoDB
//   var peter = new Student({
// 	  firstname: 'Peter',
// 	  lastname: 'Thomas',
// 	  age: 25
//   })
//   peter.subjects.push(math._id, computer._id)
//
//   peter.save(function(err){
// 	  if(err) return console.log(err.stack);
// 	  console.log("Peter is added")
//   });
//
// //
// Student.findOne({ firstname: req.params.firstname })
// .populate('subjects')
// .exec(function (err, student) {
// 	if (err){
// 		...
//
// 	}
//
// 	res.send(student);
// });
