import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'utils/helper';

interface Props {
  duration?: number;
  anmateName?: 'fadeIn' | 'slideInRight' | 'slideInBottom';
}

const animates = {
  fadeIn: {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  },
  slideInRight: {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 200 },
  },
  slideInBottom: {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, y: 200 },
  },
};

export function AnimateBox(props: React.PropsWithChildren<Props>): JSX.Element {
  const { children, duration = 0.5, anmateName = 'fadeIn' } = props;

  const mobile = isMobile();
  const animation = mobile ? 'fadeIn' : anmateName;
  const boxVariant = { ...animates[animation] };
  boxVariant.visible.transition.duration = duration;

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}
