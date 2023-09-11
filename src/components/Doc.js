import React from 'react';
import "./doc.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




export default function Doc(props) {



  let myStyle={
    color:props.mode === 'dark'?'whitesmoke':'black',
    backgroundColor:props.mode === 'dark'? '#2c2d2e': 'whitesmoke'
  }
  return (
 
    <div className='Doc ' style={myStyle}  >
      {/* <img src={require('../../public/clipart1084873.png')}/> */}
      <h1 style={myStyle}>Documentation</h1>
     
      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item"  style={myStyle}  >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <CheckCircleIcon/>    Uppercase
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong> Upper case</strong>- letters that are written or printed in their large form; capital letters
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <CheckCircleIcon/>    Lowercase
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Lower case</strong> - Lower case letters are the shorter and smaller versions of upper case letters (also called capital letters). Some lower case letters look completely different from their upper case counterparts, however. For example, 'a' is the lower case version of 'A' and 'w' is the lower case version of 'W
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <CheckCircleIcon/>    Titlecase
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Title case</strong>- Title case means that the first letter of each word is capitalized, except for certain small words, such as articles and short prepositions.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <CheckCircleIcon/>     Removespace
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Remove Space</strong>- It will remove all the extraspaces between word except single space. 
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
             <CheckCircleIcon/>    Reversetext
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Reverse Text </strong>- Reversing a text is the process of the complete reversal of its words in such a way that appears in its mirror view. Reverse text is widely used on social media where people use it to give a unique touch to their posts. Another example of reverse text is on an ambulance vehicle
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
             <CheckCircleIcon/>    Copytext
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Copy Text </strong> - the act of duplicating text, data producing two or more of the same file or segments of data. 
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
             <CheckCircleIcon/>    Cuttext
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Cut Text </strong>- The cut command removes the selected data from its original position, while the copy command creates a duplicate; in both cases the selected data is kept in temporary storage (the clipboard). The data from the clipboard is later inserted wherever a paste command is issued.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
             <CheckCircleIcon/>    Cleartext
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Clear text </strong>- Clear describes removing all text from a section of the screen. When working with text, a user may use this button on their screen to clear any text.
            </div>
          </div>
        </div>

       
      </div>
{/* 
      <div className="card">
        <h1>UPPERCASE</h1>
        <p><strong> Upper case.</strong>letters that are written or printed in their large form; capital letters</p>
      </div>
      <div className="card">
        <h1>lowercase</h1>
        <p><strong>Lower case.</strong> Lower case letters are the shorter and smaller versions of upper case letters (also called capital letters). Some lower case letters look completely different from their upper case counterparts, however. For example, 'a' is the lower case version of 'A' and 'w' is the lower case version of 'W</p>
      </div>
      <div className="card">
        <h1>Titlecase</h1>
        <p><strong>Title case.</strong>Title case means that the first letter of each word is capitalized, except for certain small words, such as articles and short prepositions.</p>
      </div>
      <div className="card">
        <h1>Remove Space</h1>
        <p><strong>Remove Space.</strong>It will remove all the extraspaces between word except single space. </p>
      </div>
      <div className="card">
        <h1>Reverse text</h1>
        <p><strong>Reverse Text.</strong>Reversing a text is the process of the complete reversal of its words in such a way that appears in its mirror view. Reverse text is widely used on social media where people use it to give a unique touch to their posts. Another example of reverse text is on an ambulance vehicle</p>
      </div>
      <div className="card">
        <h1>Copy text</h1>
        <p><strong>Copy Text.</strong> the act of duplicating text, data producing two or more of the same file or segments of data. </p>
      </div>
      <div className="card">
        <h1>Clear text</h1>
        <p><strong>Clear Text.</strong>Clear describes removing all text from a section of the screen. When working with text, a user may use this button on their screen to clear any text.</p>
      </div>
      <div className="card">
        <h1>UPPERCASE</h1>
        <p></p>
      </div> */}
</div> 

 
  )
}
