const DURATION = 0.6;
const STAGGER = 0.2;
const AMOUNT = 0.35;

const hidden = {
  opacity: 0,
};

const show = {
  opacity: 1,
  transition: {
    duration: DURATION,
  },
};

const fadeInFromLeft = {
  hidden: {
    ...hidden,
    x: -50
  },
  show: {
    ...show,
    x: 0
  },
};

const fadeInFromRight = {
  hidden: {
    ...hidden,
    x: 50
  },
  show: {
    ...show,
    x: 0
  },
};

const fadeInFromTop= {
  hidden: {
    ...hidden,
    y: -50
  },
  show: {
    ...show,
    y: 0
  },
};

const fadeInFromBottom = {
  hidden: {
    ...hidden,
    y: 50
  },
  show: {
    ...show,
    y: 0
  },
};

const wrapperAnimationProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: AMOUNT },
  transition: { staggerChildren: STAGGER },
}

export { wrapperAnimationProps, fadeInFromLeft, fadeInFromRight, fadeInFromTop, fadeInFromBottom };
