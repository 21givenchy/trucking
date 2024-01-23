import { useForm } from 'react-hook-form';

// TODO: style form
// TODO: add labels
// TODO: add inputs

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
      <input
        className="border-[1px] rounded-lg border-[#27272a] bg-transparent py-2 px-3 text-sm"
        type="text"
        placeholder="Last name"
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      <input
        className="border-[1px] rounded-lg border-[#27272a] bg-transparent py-2 px-3 text-sm"
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="border-[1px] rounded-lg border-[#27272a] bg-transparent py-2 px-3 text-sm"
        type="tel"
        placeholder="Mobile number"
        {...register('Mobile number', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <button className="self-start mt-3">
        <input
          className="rounded-lg bg-neutral-50 text-[#18181B] py-2 px-4 text-sm cursor-pointer"
          type="submit"
        />
      </button>
    </form>
  );
}
