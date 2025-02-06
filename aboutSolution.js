```javascript
// pages/aboutSolution.js
import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./MyComponent'));

export default function About() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent/>
    </Suspense>
  );
}

// pages/MyComponent.js
const MyComponent = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
      setData({ message: 'Data fetched successfully!' });
    };
    fetchData();
  }, []);

  if (!data) {
    return null; // handled by suspense
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```