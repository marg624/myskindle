import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  let dateString = `${month}/${date}/${year}`;

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <a href="https://myskindle.vercel.app/">MySkindle</a>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {dateString} | A skincare themed version of Wordle. Daily.
      </h4>
    </section>
  )
}

export default Intro
