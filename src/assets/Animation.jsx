export const SlideInRightAnimationVariants = {
    initial: {
        opacity: 0,
        x: -300,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            // type: "spring",
            // stiffness: 50
        }
    },
}

export const SlideInRightTextAnimationVariants = {
    initial: {
        opacity: 0,
        x: -90,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            // type: "spring",
            // stiffness: 50
        }
    },
}

export const SlideInLeftAnimationVariants = {
    initial: {
        opacity: 0,
        x: 300,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    },
}

export const SlideUpAnimationVariants = {
    initial: {
        opacity: 0,
        y: 300,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
}