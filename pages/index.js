import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
    <h1 className=" flex mb-1 border-4 border-vuejs-932 justify-end">
        Hello world!
      </h1>
        <h1 className="flex text-xs mb-4 sm:text-lg lg:text-3xl justify-center">
        Hello world!
      </h1>

        {/* Typography */}
        <h1>Title 1</h1>
        <h1 className='line-through'>Title 2</h1>
        <h1 className='text-xl italic underline decoration-amber-700'>Title 3</h1>
        <p className='text-base'>A regular approach</p>
        <p className='text-sm'>A description paragraph</p>
        <p className="text-xs mb-5 note ">A little note</p>

        {/* Flex */}
        <div className='parent'>
            <div>Header</div>
            <div className="flex flex-col md:flex-row">
                <div className="w-32 bg-sky-500">sidebar</div>
                <div className="md:w-full bg-amber-700">
                    Main Content
                </div>
            </div>
        </div>
        {/* Justify between helps to makes space between all the elements */}
        <div className='parent mb-3 mt-3'>
            <div>Header</div>
            <div className="flex flex-col md:flex-row justify-evenly">
                <div>sidebar</div>
                <div>Main Content</div>

            </div>
        </div>


        <div className='parent'>
            <div>Header</div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-wrap w-full">
                    <div className="w-32 grow">01</div>
                    <div className="w-32 grow">02</div>
                    <div className="w-32 grow">03</div>
                    <div className="w-32 grow">04</div>
                    <div className="w-32 grow">05</div>
                </div>
            </div>
        </div>
      </div>

  )
}
