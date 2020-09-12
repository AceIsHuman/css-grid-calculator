export default {
  c: props => {
    props.setTotal('0');
    props.setPreviousTotal(0);
  },
  '+': props => {
    let total = props.total;
    if (props.operation) {
      total = evalOp(props.previousTotal, props.total, props.operation);
      props.setTotal(`${total}`);
    }
    props.setPreviousTotal(total);
    props.setOperation('+');
  },
  '-': props=> {
    let total = props.total;
    if (props.operation) {
      total = evalOp(props.previousTotal, props.total, props.operation);
      props.setTotal(`${total}`);
    }
    props.setPreviousTotal(total);
    props.setOperation('-');
  },
  '*': props=> {
    let total = props.total;
    if (props.operation) {
      total = evalOp(props.previousTotal, props.total, props.operation);
      props.setTotal(`${total}`);
    }
    props.setPreviousTotal(total);
    props.setOperation('*');
  },
  '/': props=> {
    let total = props.total;
    if (props.operation) {
      total = evalOp(props.previousTotal, props.total, props.operation);
      props.setTotal(`${total}`);
    }
    props.setPreviousTotal(total);
    props.setOperation('/');
  },
  '=': props=> {
    let total = props.total;
    if (props.operation) {
      total = evalOp(props.previousTotal, props.total, props.operation);
      props.setTotal(`${total}`);
    }
    props.setPreviousTotal(total);
    props.setOperation(null);
  },
};

function evalOp(a, b, operation) {
  const callOp = {
    '+': () => parseInt(a) + parseInt(b),
    '-': () => parseInt(a) - parseInt(b),
    '*': () => parseInt(a) * parseInt(b),
    '/': () => parseInt(a) / parseInt(b),
  };

  return callOp[operation]();
}
