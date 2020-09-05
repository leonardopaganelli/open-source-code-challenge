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
      { title: 'Teacher ID', field: 'id' },
      { title: 'Class', field: 'class', lookup: classList },
      { title: 'Section', field: 'section', lookup: sectionList },
    ],
    data: [
      { name: 'Jamie-Leigh Glover', id: 'CC8B76E6-93D2-4BED-A4F1-FE29165CF1E8', class: 1, section: 0 },
      { name: 'Nela Pearson', id: 'C22EF0A3-45D5-4881-8EB2-0007EB660D1B', class: 1, section: 1 },
      { name: 'Eilidh Ferreira', id: '7E43B513-CC29-4770-AB58-DFCAE54BB0FE', class: 2, section: 2 },
      { name: 'Kishan Sharples', id: '5AF479CA-1D91-418B-B12B-2FFD3A282893', class: 2, section: 1 },
      { name: 'Anand Leonard', id: '52C3D780-B416-4967-94F5-35EAB527933D', class: 1, section: 1 },
      { name: 'Jovan Salazar', id: '2D7C8BCD-C645-4191-BDF1-EA4F803EDE75', class: 1, section: 3 },
      { name: 'Zachariah Downes', id: '40B1B0BC-75B1-4A07-9A17-600048DCDCA8', class: 1, section: 3 },
      { name: 'Hamzah Gonzales', id: '2168249F-CA4E-41FD-9B60-B4D8BA31A9F5', class: 3, section: 1 },
      { name: 'Koby Melendez', id: '0FCDA859-C95D-437A-BCA2-FBCAAF73E751', class: 3, section: 1 },
      { name: 'Riaan Kouma', id: '71C396D4-2318-45CF-9E86-8CC8FBC5C670', class: 5, section: 2 },
    ],
  });

  return (
    <MaterialTable
      title="Teacher List"
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