import { useEffect, useState } from "react";

function ScrollTop() {

const [show,setShow]=useState(false);

useEffect(()=>{

window.addEventListener("scroll",()=>{

setShow(window.scrollY>250);

});

},[]);

return(

show &&

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className="fixed bottom-6 right-6 bg-orange-500 text-white w-14 h-14 rounded-full shadow-xl hover:bg-orange-600"

>

↑

</button>

);

}

export default ScrollTop;