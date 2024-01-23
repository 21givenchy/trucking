import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [truckLocation, setTruckLocation] = useState([]);
  
  useEffect(() => {
    fetch('http://gps51.com/#/tracking?isshare=1&deviceid=9172808375&authcode=101b81accc1b2ffe6ab1788f25c09387&devicename=KCV645L&language=zh')
      .then(res => res.json())
      .then(data => setTruckLocation(data.features[0].center))
  }, []);

  console.log(truckLocation);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mx-auto w-full max-w-md"
    >
      <input
        className="border-[1px] rounded-lg border-[#27272a] bg-transparent py-2 px-3 text-sm"
        type="text"
        placeholder="First name"
        {...register('First name', { required: true, maxLength: 80 })}
      />
      <div>
        Truck Location: {truckLocation ? `${truckLocation[0]}, ${truckLocation[1]}` : 'Loading...'}
      </div>
      
      <input type="submit" />
    </form>
  );
}

export default Form;