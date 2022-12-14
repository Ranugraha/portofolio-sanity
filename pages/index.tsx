import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Ridwan Anugrah Portofolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='Skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='Projects' className='snap-center'>
        <Projects />
      </section>

      {/* Contact Me */}

    </div>
  );
};

export default Home;