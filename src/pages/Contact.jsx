import React, { useRef, useState } from 'react'
import Info from '../components/Info'
import Style from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser'

const options = [
  'I know about it from promos and print ads',
  'My friends and family have recommended your company',
  'I came across it on social media',
  'I saw it among the search engine results',
]

function Contact() {
  const formRef = useRef();
  const [status,setStatus] = useState("");

  const [selected, setSelected] = useState(null)
  const [comment, setComment] = useState('')

  const handleSubmit =(e) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      setStatus("empty");
      return;  
    }

    setStatus("sending");

    emailjs.sendForm(
      "service_8g3ks8g",
      "template_tfxpn1g",
      formRef.current,
      "Cv23zM56qLSjYHK6K"
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();
      setComment('');      
      setSelected(null);
    })
    .catch((err) =>{ 
      console.log("EmailJS Error:",err)
      setStatus("error")});
  };

  return (
    <>
    <div className={Style.container}>
      <div className={Style.content}>

        <div className={Style.left}>
          <h2 className={Style.heading}>Thank you <br /> for visiting us.</h2>
          <p className={Style.sub}>Before you leave, we would love to know<br /> how you discovered us.</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>

        <div className={Style.right}>
          {options.map((opt, i) => (
            <button
              key={i}
              type="button"
              className={`${Style.optBtn} ${selected === i ? Style.optActive : ''}`}
              onClick={() => {
                setSelected(i)
                setComment(prev => prev ? prev + '\n' + opt : opt)}
              }
            >
              {opt}
            </button>
          ))}
          <textarea 
           name='message'
           required
           className="border rounded-2xl h-20 text-indigo-500 bg-white/50"
           placeholder='comment....'
           value={comment}
           onChange={(e) => setComment(e.target.value)}/>

            {status === "success" && <p style={{ color: "green" }}>Message sent!</p>}
            {status === "error" && <p style={{ color: "red" }}>something went wrong</p>}

          <button 
           type="submit"
           disabled={status === "sending"}
           className="border rounded-2xl w-50 py-2 bg-indigo-500 text-amber-50  ease-in-out cursor-grab active:scale-95 transition-transform"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
        </form>

      </div>


    </div>
    <Info/>
    </>
  )
}

export default Contact