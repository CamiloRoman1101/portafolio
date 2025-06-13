import { href } from "react-router-dom";

const Button = ({variant = 'primary', className= '', href, onClick, children}) => {

    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center cursor-pointer'

    const variants = {
        primary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
        secondary: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-cyan-900',
    }

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    if(href){
       <a href={href} className={buttonClass} onClick={onClick}>
        {children}
       </a> 
    }
  return (
    <button className={buttonClass} onClick={onClick}>
        {children}
    </button>
  );
};

export default Button;