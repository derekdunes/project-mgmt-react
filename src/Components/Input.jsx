import { useRef, forwardRef, useImperativeHandle } from 'react'



const Input = forwardRef(function Input({ title, type }, ref) {

    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
          getValue() {
            return inputRef.current.value;
          },
          resetValue() {
            inputRef.current.value = ""; 
          }
        };
      });

    return (
        <div>
            <label className="text-sm font-bold uppercase text-stone-500">{title}</label>

            {type !== "textarea" && <input ref={inputRef} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type={type} /> }
            {type === "textarea" && <textarea ref={inputRef} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" /> }
        </div>
    )
});

export default Input;