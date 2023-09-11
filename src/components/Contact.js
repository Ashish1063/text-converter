import React, {  useState } from 'react';
import { send } from 'emailjs-com';
import './contact.css';

const Contact = (props) => {

    const [sender_name, set_sender_name] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [message, set_message] = useState('');
   
   
    const handleName = (e) =>{
       set_sender_name(e.target.value)
   
    }
    const handleEmail =(e) =>{
       set_sender_email(e.target.value)
   
    }
    const handlemessage = (e) =>{
       set_message(e.target.value)
   
    }
   
    const sendMail = (e) => {
       e.preventDefault();
       send(
           'service_zss12is',
           'template_6jc034n',
           {sender_name, sender_email, message},
           'DOsTpdVluJoqGpVMa'
       )
       .then((response)=>{
           console.log('message sent successfully ',response.status, response.text)
       })
       .catch((err) =>{
           console.log('Failed', err)
       })
       set_sender_name('');
       set_sender_email('');
       set_message('');
    }


 
    return (



        <div name='contact' className="contact" style={{ color:props.mode==='dark'?'white':'black'}}>
            <div className="container"> 
            <div className='row'>
                {/* <div className="email-box reveal">
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/4087457/media/de172b5a2287a8ca9900e716fd36d7c8.gif" border="0" alt="animated-email" />
                </div> */}
                <div className="contact-form">
                    <form onSubmit={sendMail}>

                        <h1>Get In Touch</h1>

                        <div className="singleItem">

                            <input type='text'
                                className='name'
                                value={sender_name}
                                onChange={handleName}
                                name='sender_name'
                                placeholder='Name...'

                            />
                        </div>

                        <div className="singleItem">

                            <input type='email'
                                name='sender_email'
                                value={sender_email}
                                onChange={handleEmail}
                                className='email'
                                placeholder='Email...'

                            />
                        </div>




                        <div className='textArea singleItem'>


                            <textarea
                                id=""
                                name='message'
                                value={message}
                                onChange={handlemessage}
                                cols='30' rows='3'
                                placeholder="Leave your Message..."

                            ></textarea>
                        </div>
                        <div className="msg" >
                            {send && "Message has been sent"}
                        </div>
                        <button type="submit" class="button-73"  >Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
    }
    export default Contact