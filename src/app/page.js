// 'use client';
// import Countdown from './components/Countdown';
// import CommunityInfo from './components/CommunityInfo';

// export default function HomePage() {
//   return (
//     <main style={{ backgroundColor: typeof window !== 'undefined' ? '#f0f0f0' : '#f0f0f1', padding: '20px', borderRadius: '10px'}}>
//       <CommunityInfo />
//       <Countdown />
//     </main>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import Countdown from './components/Countdown';
import CommunityInfo from './components/CommunityInfo';

export default function HomePage() {
  const [bgColor, setBgColor] = useState('#f0f0f1'); // Default (SSR-safe)

  useEffect(() => {
    setBgColor('#f0f0f0'); // Only runs on client
  }, []);

  return (
    <main
      style={{
        backgroundColor: bgColor,
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <CommunityInfo />
      <Countdown />
    </main>
  );
}
