import { useState } from "react";
import { useEffect } from "react";
function Word({ title }) {
  const[Text,setText] = useState("");

  function count() {
    const a = document.getElementById('txtarea')
    setText(a.value)
  }

  function toupper() {
    const a = document.getElementById('txtarea').value = Text.toUpperCase()
  }

  function tolower() {
    const a = document.getElementById('txtarea')
    a.value = Text.toLowerCase()
  }

  const copyToClipboard = () => {
    const a = document.getElementById('txtarea')

    navigator.clipboard.writeText(a.value).then(
      () => {
        alert("Text copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy text: " + err);
      }
    );
  }

  const reset = () => {
    const a = document.getElementById('txtarea')
    a.value = ''
    setText('')
  }

  const [style2, setStyle] = useState({
     color: 'white',
     backgroundColor: 'black' });

  useEffect(() => {

    if (title === 'dark') {
      setStyle({ 
        color: 'white',
        backgroundColor: 'rgb(23 37 84 / var(--tw-bg-opacity, 1)) /* #172554 */' });
    } 
    else {
      setStyle({ 
        color: 'grey',
        backgroundColor: 'rgb(191 219 254 / var(--tw-text-opacity, 1)) /* #bfdbfe */'
       });
    }

  }, [title]);

  const [style3, setStyle1] = useState({
    color: 'white',
    backgroundColor: 'black' });

 useEffect(() => {

   if (title === 'dark') {
     setStyle1({ 
       color: 'rgb(212 212 216 / var(--tw-text-opacity, 1)) /* #d4d4d8 */', });
   } 
   else {
     setStyle1({ 
       color: 'rgb(15 23 42 / var(--tw-text-opacity, 1)) /* #0f172a */',
      });
   }

 }, [title]);

 function TimeToRead() {
          let time =  Math.round((((Text.length) *  0.07)));
          if(time <= 60)
            return time + "sec";
          else if(time > 60 && time <= 3600){
            return Math.round(time/60) + "min";
          }
          else {
            const hour = (time/3600).toFixed(2);
            return hour + "hour"
          }
 }

  return (
    <>
      <h1 className=" ml-2 mt-4 mb-3 text-[35px]  font-semibold" style={style3}>Enter text below to analyze</h1>
      <div className="flex flex-col items-center ">
        <textarea
          style={style2}
          name="" 
          id="txtarea"
          className="h-[40vh] w-[99vw] border-[3px] border-black rounded-md  text-[35px]" onChange={count} placeholder=" Type here..."
        ></textarea>
        <div className="flex w-[100vw] mt-7 ml-3">
          <a className="btn btn-primary w-[160px] mr-2" href="#" role="button" onClick={copyToClipboard}>
            Copy
          </a>
          <button id="toup" 
          onClick={toupper} className="btn btn-primary w-[160px] mr-2" type="submit">
            To-Uppercase
          </button>
          <input
            onClick={tolower}
            className="btn btn-primary w-[160px] mr-2"
            type="button"
            defaultValue="To-Lowercase"
          />
          <input
            onClick={reset}
            className="btn btn-primary w-[160px] mr-2"
            type="reset"
            defaultValue="Reset"
          />
        </div>
      </div>
      <h1 className="ml-3 mt-4 mb-3 text-[35px] font-semibold" style={style3}>Your Text Summary</h1>
      <p className="ml-4 text-[18px]">Number of characters are {Text.length} and words are {Text.split(' ').length}</p>

      <h1 className="ml-3 mt-4 mb-2 text-[35px]  font-semibold" style={style3}>Average Reading Time</h1>
      <p className="ml-5 text-[18px]">Probaly {TimeToRead()} will take to read this</p>
    </>
  );
}
export default Word;