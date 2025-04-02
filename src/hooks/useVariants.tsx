const skipCardVariant = (duration = 2, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};

const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
  exit: "exit",
};

export const useVariants = () => {
  return {
    variantProps,
    skipCardVariant,
  };
};
