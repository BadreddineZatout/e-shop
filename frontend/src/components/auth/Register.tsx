import { Dialog, Transition } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { API_URL } from '@/constants/env';
import { toggleRegisterModal } from '@/features/modals';
import { login } from '@/features/user';
import { AXIOS_CONFIG } from '@/constants';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Your password should have 8 letters minimum'),
  })
  .required();

function Register() {
  const router = useRouter();
  const show = useAppSelector((state) => state.modals.showRegister);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toggleModal = () => {
    dispatch(toggleRegisterModal());
  };

  const handleRegister = handleSubmit(async (credentials) => {
    try {
      if (API_URL) {
        const response = await axios.post(
          API_URL + 'api/register',
          {
            ...credentials,
          },
          AXIOS_CONFIG
        );
        dispatch(login(response.data));
      }
      router.reload();
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return message;
    }
  });

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='mt-5 mb-16 text-center text-3xl font-bold leading-6 text-primary'
                  >
                    e-shop
                  </Dialog.Title>
                  <form className='mt-2 flex flex-col items-end gap-y-5'>
                    <input
                      className='ml-5 w-full rounded-md border border-secondary focus:border-dark focus:ring-1 focus:ring-dark'
                      placeholder='name'
                      type='text'
                      {...register('name')}
                    />
                    <p className='w-full text-left text-sm text-red-500'>
                      {typeof errors.name?.message == 'string'
                        ? errors.name?.message
                        : ''}
                    </p>
                    <input
                      className='ml-5 w-full rounded-md border border-secondary focus:border-dark focus:ring-1 focus:ring-dark'
                      placeholder='email'
                      type='text'
                      {...register('email')}
                    />
                    <p className='w-full text-left text-sm text-red-500'>
                      {typeof errors.email?.message == 'string'
                        ? errors.email?.message
                        : ''}
                    </p>
                    <input
                      className='ml-5 w-full rounded-md border border-secondary focus:border-dark focus:ring-1 focus:ring-dark'
                      placeholder='password'
                      type='password'
                      {...register('password')}
                    />
                    <p className='w-full text-left text-sm text-red-500'>
                      {typeof errors.password?.message == 'string'
                        ? errors.password?.message
                        : ''}
                    </p>
                  </form>

                  <div className='mt-10 w-full text-center'>
                    <button
                      type='submit'
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-light px-4 py-2 text-sm font-medium text-primary hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Register;
