const successRes = ({ text, data }) => ({
  message: text,
  status: 0,
  data,
});

const errorRes = ({ text, data }) => ({
  message: text,
  status: -1,
  data,
});

module.exports = {
  successRes,
  errorRes,
};
