import moment from 'moment';

// var admission = moment('{date1}', 'DD-MM-YYYY');
// var discharge = moment('{date2}', 'DD-MM-YYYY');

export const CheckTimeD = (prev) => {
  // let currdate = moment(new Date().toJSON().slice(0, 10));
  let currdate = new Date().toISOString().slice(0, 10);
  let a = moment(currdate);
  let b = moment(prev);
  return b.diff(a, 'days');
};
