import React, { Component } from 'react';

export class UpdateParts extends Component{
 render(){
   return(
     <div className='productEditClass'>
       <h2>EDIT SECTION</h2>
         <br/>

         <br/>
       <div>
         <p className='editInpu'>Name</p>
         <input
          className='editInput'
           value = {this.props.name}
           onChange = {this.props.onChanges}
           name = "name"
           placeholder = "Change your name"
         />

         <p className='editInpu'>Color</p>
         <input
          className='editInput'
           value = {this.props.color}
           onChange = {this.props.onChanges}
           name = 'color'
           placeholder = "change color"
         />

         <p className='editInpu'>pkg_width</p>
         <input
          className='editInput'
           value = {this.props.pkg_width}
           onChange = {this.props.onChanges}
           name = 'pkg_width'
           placeholder = "Change in pkg_width"
         />

         <p className='editInpu'>pkg_height</p>
         <input
          className='editInput'
           value = {this.props.pkg_height}
           onChange = {this.props.onChanges}
           name = 'pkg_height'
           placeholder = "Change in pkg_height"
         />

         <p className='editInpu'>pkg_depth</p>
         <input
          className='editInput'
           value = {this.props.pkg_depth}
           onChange = {this.props.onChanges}
           name = 'pkg_depth'
           placeholder = "Change in pkg_depth"
         />

         <p className='editInpu'>actual_width</p>
         <input
          className='editInput'
           value = {this.props.actual_width}
           onChange = {this.props.onChanges}
           name = 'actual_width'
           placeholder = "Change in actual_width"
         />

         <p className='editInpu'>actual_height</p>
         <input
          className='editInput'
           value = {this.props.actual_height}
           onChange = {this.props.onChanges}
           name = 'actual_height'
           placeholder = "Change in actual_height"
         />

         <p className='editInpu'>actual_depth</p>
         <input
          className='editInput'
           value = {this.props.actual_depth}
           onChange = {this.props.onChanges}
           name = 'actual_depth'
           placeholder = "Change in actual_depth"
         />
         <br/>
         <button onClick={this.props.submitEdit}>
           submit
         </button>
       </div>
     </div>
   )
 }
}
