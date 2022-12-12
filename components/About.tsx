import React from 'react'
import { motion } from 'framer-motion'

type Props = {}


export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl-w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold '>
                    Here is a {' '} <span className='underline decoration-[#F7AB0A]/50'>title</span> {' '}background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat voluptatum non velit modi officia quo omnis possimus soluta quaerat deleniti odio voluptas quod reprehenderit, laudantium esse natus laboriosam itaque temporibus eos. Nemo quia quidem quae illum facilis, magni possimus asperiores eius, quasi qui expedita quaerat eaque. Quia, architecto magni.
                </p>
            </div>
        </motion.div>
    )
}
