import { AnimatePresence, motion } from 'framer-motion';
import { IModal } from '../../lib/interfaces';
import { fadeIn, fadeInTop } from '../../utils/data/animations';
import { ReactNode, useEffect } from 'react';

interface Title {
  title: string;
  description?: ReactNode;
  icon?: ReactNode;
}

const Modal = {
  Content: ({ title, description, icon }: Title) => {
    return (
      <>
        <Icon icon={icon} />
        <h1 className={`text-white font-semibold mb-5 text-xl`}>{title}</h1>
        {description}
      </>
    );
  },
  Body: ({ children, onClose, open, className }: IModal) => {
    useEffect(updateBody, [open]);

    function updateBody() {
      const body = document.querySelector('body') as HTMLBodyElement;
      if (open && typeof window !== 'undefined') {
        body.style.overflow = 'hidden';
      } else if (!open && body) {
        body.style.overflow = 'auto';
      }
    }
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            key={'modal-content'}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeIn}
            className="fixed inset-0 z-50 overflow-y-auto scrollbar-none"
            aria-labelledby="modal"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 z-20 bg-header-100 bg-opacity-90 backdrop-filter backdrop-blur-sm"
                onClick={onClose}
              >
                &nbsp;
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &8203;
              </span>
              <motion.div
                key={'modal-content'}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeInTop}
                className={`relative inline-block sm:align-middle z-50`}
              >
                <div
                  className={` scrollbar-none bg-modal-100 w-full p-6 rounded-lg ring-modal-150 ring-2 ${className}`}
                >
                  <div className={'flex flex-col items-center text-center'}>
                    {children}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
};

const Icon = ({ icon }: { icon: ReactNode }) => {
  if (icon) {
    return (
      <div
        className={
          'bg-modal-150 flex text-on-modal-icon-900 items-center justify-center text-lg' +
          ' rounded-full w-12 h-12 mb-4'
        }
      >
        {icon}
      </div>
    );
  } else return <></>;
};

export default Modal;
