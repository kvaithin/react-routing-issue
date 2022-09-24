import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState();

  // just a fake call to emulate waiting for data first
  useEffect(() => {
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(d => setData(d));
  }, [])

  // i want this redirect to happen without seeing the text below. 
  useEffect(() => {
    const shouldRedirect = true;
    if (shouldRedirect) { // some other logic that will determine if shouldRedirect
      window.location.replace('https://hn.algolia.com/api/v1/search?query=redux') 
    }
  }, [])

  return (
    <div>
      I should never reach here cos of the redirecting
      But I still see this text briefly for a second or 2 before redirecting.

      {/* other components inside here  */}
    </div>
  );
}

export default (App);
