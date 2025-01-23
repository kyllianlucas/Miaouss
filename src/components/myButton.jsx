function MyButton({ setValue, value }) {
  function add() {
    setValue(value + 1);
  }

  return <button onClick={add}>myButton</button>;
}

export default MyButton;
