import toast from 'react-hot-toast';

const errNotify = msg => {
  toast.error(msg, {
    duration: 1000,
  });
};

export default errNotify;
