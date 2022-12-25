import { useRouter } from 'next/router';
import Layout from '@components/common/layout';
import Calender from '@components/common/calender';
import Button from '@components/common/button';
import { useState } from 'react';
import TimePicker from '@components/common/time-picker';
import { useForm } from 'react-hook-form';

function Schedule() {
  const { setValue, handleSubmit } = useForm();

  const onValid = (form) => {
    console.log(form);
    router.push('/events/create/summary');
  };
  const router = useRouter();
  return (
    <Layout>
      <form
        onSubmit={handleSubmit(onValid)}
        className="w-full flex flex-col items-center justify-center h-full"
      >
        <div className="w-full flex flex-col items-center justify-center mb-16">
          <h1 className="text-h2 font-bold text-center text-base-black">
            Choose WeekDays
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <Calender />
        </div>
        <div className="w-full flex items-center justify-between mt-4">
          <TimePicker
            name="start_time"
            dayOrNight={false}
            setValue={setValue}
          />
          <TimePicker name="end_time" dayOrNight={true} setValue={setValue} />
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <Button>Next</Button>
        </div>
      </form>
    </Layout>
  );
}
export default Schedule;
