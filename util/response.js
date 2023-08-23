const successRes = ({ text, data }) => ({
  message: text,
  status: 0,
  data: data || {},
});

const errorRes = ({ text, data }) => ({
  message: text,
  status: -1,
  data: data || {},
});

module.exports = {
  successRes,
  errorRes,
};
