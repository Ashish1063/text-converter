import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './textform.css';

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log('uppercase clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upperscase!")
  }

  const handleLoClick = () => {
    // console.log('uppercase clicked'+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!")
  }


  const handleClearClick = () => {
    // console.log('uppercase clicked'+ text);
    let newText = '';
    setText(newText)

  }

  // copy text

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();

    navigator.clipboard.writeText(text.value);
    props.showAlert("Successfully Copied!")
  }



  //conversion  of Title Case
  const handleTitleClick = () => {

    let newText = text.replace(/\w\S*/g, function (t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); });
    setText(newText);
    props.showAlert("Converted to Titlecase!")

  }

  // For cut button

  // const handleCutclick = () => {
  //         console.log("Cut case was clicked" + text);
  //         let newText = document.getElementById("exampleFormControlTextarea1");
  //         newText.select();
  //         navigator.clipboard.writeText(newText.value);
  //         newText.innerText=text
  //         newText.value=('')
  //         props.showAlert("Successfully cut!")
  //     }

  //reverseText

  const reverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text is successfully Reversed!")
  }

  // text to speak


  let { speak } = useSpeechSynthesis();
  const handleOnspeek = () => {
    speak({ text: text })
    props.showAlert("Speaking... Turn On Your Volume!")

  }

  let { cancel } = useSpeechSynthesis();
  const handleOffspeek = () => {
    cancel(" ");
    props.showAlert("Voice is Paused!")

  }


  //cursive
  const handlefont = () => {
    var element = document.getElementById("exampleFormControlTextarea1");
    element.style.fontFamily = "cursive";

  }

  //bold
  const handleBoldFont = () => {
    let newText = document.getElementById('exampleFormControlTextarea1');
    newText.style.fontWeight = 'bold';

  }


  //fontsize

  const [size, setSize] = useState(20);

  // const fontStyle = {
  //   fontSize: `${size}px`
  // }

  // increase and dcrease font size
  const increaseFontSize = () => {
    console.log("increase Font size");
    setSize(size + 1);
  }
  const decreaseFontSize = () => {
    console.log("decurease font size");
    setSize(size - 1);
  }



  //extra spaces
  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space is successfully removed!")
  }



  // download text
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([text], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.txt';
    element.click();
  }





  const handleOnChange = (event) => {
    // console.log('uppercase clicked')
    setText(event.target.value);
  }
  const [text, setText] = useState('')
  return (


    <div className='container'>
      <div className=" TextForm my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black', height: '100vh' }} id='textform' >

        <div className="mb-3 " >
          {/* <h1> Text Converter</h1> */}
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong> Enter here to Convert ...</strong></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#a3a8ad' : 'whitesmoke', color: props.mode === 'dark' ? 'white' : 'black', fontSize: `${size}px` }} id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button className="btn  mx-1 my-1" role="button" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn  mx-1 my-1" role="button" onClick={handleLoClick}>lowercase</button>
        <button className="btn  mx-1 my-1" role="button" onClick={handleTitleClick}>Titlecase</button>
        <button className="btn  mx-1 my-1" role="button" onClick={handleExtraSpaces}>Remove Space</button>

        <button className="btn  mx-1 my-1" role="button" onClick={reverseText}>Reverse Text</button>
        <button className="btn   mx-1" role="button" onClick={handleCopy}>Copy Text</button>
        <button className="btn   mx-2  my-1" role="button" onClick={handleClearClick}>Clear Text</button>
        <button className='btn mx-2 my-1' onClick={downloadTxtFile}>Download text</button>
        <button className="btn  mx-1 my-1" role="button" onClick={handlefont}><FormatItalicIcon /></button>
        <button className="btn  mx-1 my-1" role="button" onClick={handleBoldFont}><FormatBoldIcon /></button>
        <button className="btn  mx-1 my-1" role="button" onClick={increaseFontSize}> <AddIcon /></button>
        <button className="btn  mx-1 my-1" role="button" onClick={decreaseFontSize}> < RemoveIcon /></button>



        {/* <button className="btn btn-primary mx-1" onClick={ handleCutclick}>Cut Text</button> */}

        {/* <button className="btn btn-primary mx-2" onClick={bold}>Bold</button> */}



        <button className="btn   m-1  my-1" role="button" onClick={handleOnspeek}><VolumeUpIcon /></button>
        <button className="btn   m-1  my-1" role="button" onClick={handleOffspeek}><VolumeOffIcon /></button>

        <div className="container my-5">
          <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#a3a8ad' : 'whitesmoke', color: props.mode === 'dark' ? 'white' : 'black', fontSize: '20px' }}>

            <p> <strong> {text ? text.split(' ').filter(function (t) { return t !== '' }).length : 0}</strong> - Words <br /><strong> {text.length}</strong> - Characters</p>


          </div>
        </div>


        {/* <label htmlFor="exampleFormControlTextarea1"    className="form-label">Preview...</label>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#1fa394':'white', color:props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="4"> 
        {text.length>0?text:"Enter something in Textarea above to preview it here... "} 

            </textarea> */}
      </div>
    </div>
  )
}

export default TextForm