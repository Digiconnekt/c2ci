export const fadeInLeft = (duration) => {
  return {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration || 1,
      },
    },
  };
};

export const fadeInRight = (duration) => {
  return {
    hidden: {
      x: 80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration || 1,
      },
    },
  };
};

export const fadeInTop = (duration) => {
  return {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration || 1,
      },
    },
  };
};

export const fadeInBottom = (duration) => {
  return {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration || 1,
      },
    },
  };
};
