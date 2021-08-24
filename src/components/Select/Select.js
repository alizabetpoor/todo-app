import Select from "react-select";

const SelectComp = (props) => {
  const changeSelect = (e) => {
    props.setStatus(e);
  };
  const options = [
    { value: "all", label: "all" },
    { value: "completed", label: "completed" },
    { value: "uncompleted", label: "uncompleted" },
  ];
  return (
    <div>
      <Select options={options} value={props.status} onChange={changeSelect} />
    </div>
  );
};

export default SelectComp;
