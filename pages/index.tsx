import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadAllEmployees } from 'store/modules/Employee/operations';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllEmployees());
  }, []);
  return (
    <>
      <Head>
        <title>Workmotion App</title>
      </Head>

      <h1 className="h3">Home</h1>
    </>
  )
}

export default Home
