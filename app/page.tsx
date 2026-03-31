import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <h1>NexusTrade Ghana — Your Gateway to Ghana's Investment Opportunities</h1>
      <p>NexusTrade Ghana connects international investors with high-potential opportunities in Ghana's manufacturing, industrial, and agricultural sectors.</p>
      <Image src="/images/hero-ghana.jpg" alt="Ghana landscape" fill className="object-cover object-center" priority quality={90} />
    </div>
  );
};

export default LandingPage;