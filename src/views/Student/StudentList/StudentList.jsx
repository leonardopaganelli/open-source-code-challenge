import React from 'react';
import MaterialTable from 'material-table';

export default () => {
  const classList = [...Array(12).keys()]
    .reduce((map, item) => ({
      ...map,
      [item + 1]: item + 1
    }), {})
  const sectionList = [ ...Array(6).keys()]
    .reduce((map, item) => ({
      ...map,
      [item]: String.fromCharCode(65 + item)
    }), {})

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Roll No.', field: 'roll', type: 'numeric' },
      { title: 'Class', field: 'class', lookup: classList },
      { title: 'Section', field: 'section', lookup: sectionList },
    ],
    data: [
      { name: 'Holli Hale', roll: 1, class: 1, section: 1 },
      { name: 'Tamsin Cartwright', roll: 2, class: 1, section: 1 },
      { name: 'Delores Stevens', roll: 3, class: 1, section: 2 },
      { name: 'Jordon Rollins', roll: 4, class: 1, section: 2 },
      { name: 'Sumayya Forbes', roll: 5, class: 1, section: 1 },
      { name: 'Ahsan Walton', roll: 6, class: 1, section: 3 },
      { name: 'Charlotte George', roll: 7, class: 1, section: 3 },
      { name: 'Shaan Walters', roll: 8, class: 3, section: 1 },
      { name: 'Alexandria Mccarty', roll: 9, class: 3, section: 1 },
      { name: 'Keith Montgomery', roll: 10, class: 5, section: 2 },
      { name: 'Yazmin Woodcock', roll: 11, class: 5, section: 2 },
      { name: 'Nathanial Mccabe', roll: 12, class: 6, section: 1 },
    ],
  });

  return (
    <MaterialTable
      title="Student List"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}