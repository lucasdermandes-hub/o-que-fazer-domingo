import { useState, useEffect } from 'react';

export function Relogio() {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
},[]);

return <div className='relogio-container'>{hora}</div>;
}