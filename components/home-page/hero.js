import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/hassan.png'
          alt='An image showing Hassan'
          width={300}
          height={300}
          
        />
      </div>
      <h1>Hi, I'm Hassan</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Next & React.
      </p>
    </section>
  );
}

export default Hero;
