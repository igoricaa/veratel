const Features = () => {
  return (
    <section className='container-custom'>
      <h2 className='text-3xl md:text-4xl font-bold'>Why Choose Veratel?</h2>
      <p className='mt-6'>
        Your Reliable Partner for High-Quality Communications.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
        {/* 
        Flexible Use Cases: "From marketing SMS to SMS OTP
        authentication, we’ve got you covered." Free Testing: "Try our service
        risk-free before you commit." */}
        <div className='col-span-1 md:col-span-3'>
          <h3>High Delivery Rates</h3>
          <p>
            Maximize your campaign effectiveness with industry-leading delivery
            rates.
          </p>
        </div>
        <div className='col-span-1 md:col-span-3'>
          <h3>API Integration</h3>
          <p>Integrate seamlessly with our simple, robust API.</p>
        </div>
        <div className='col-span-1 md:col-span-3'>
          <h3>Superior Support</h3>
          <p>Our dedicated team is here to ensure your success 24/7.</p>
        </div>
        <div className='col-span-1 md:col-span-3'>
          <h3>Flexible Use Cases</h3>
          <p>
            From marketing SMS to SMS OTP authentication, we've got you covered.
          </p>
        </div>
        <div className='col-span-1 md:col-span-3'>
          <h3>Free Testing</h3>
          <p>Try our service risk-free before you commit.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
