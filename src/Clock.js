import { useState, useEffect } from 'react';
function Clock(){
  const [date, setClock] = useState(new Date());
  
  function refresh() {
    setClock(new Date());
  }
  useEffect(() => {
    const clockRefresher = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(clockRefresher);
    };
  }, []);
  return (
    <h3>
      {date.toLocaleTimeString()}
    </h3>
  );
}
export default Clock;