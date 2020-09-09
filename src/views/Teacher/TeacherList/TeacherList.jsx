import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import './TeacherList.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default () => {
  const classes = useStyles();
  const [classList, setClassList] = useState([...Array(12).keys()]
    .reduce((map, item) => ({
      ...map,
      [item + 1]: item + 1
    }), {})
  )

  const [sectionList, setSectionList] = useState([ ...Array(6).keys()]
    .reduce((map, item) => ({
      ...map,
      [item]: String.fromCharCode(65 + item)
    }), {})
  )

  const [state, setState] = useState({
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

  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const updateColumnList = (lookupUpdated, columnToUpdate) => {
    const { columns } = state
    const columnsUpdated = columns
      .map(column => column.field === columnToUpdate
        ? {
          ...column,
          lookup: lookupUpdated
        }
        : column
      )

    setState({
      ...state,
      columns: columnsUpdated
    })
  }

  const addClassContent = () => {
    let newClass

    const addClass = () => {
      const newClassList = {
        ...classList,
        [newClass]: newClass
      }

      updateColumnList(newClassList, 'class')
      setClassList(newClassList)

      handleCloseModal()
    }

    return (
    <div className="add-class-content">
      <h2>Add Class</h2>
      { newClass }
      <TextField
        type="number"
        onBlur={(event) => { newClass = event.target.value }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addClass()}
      >
        Add
      </Button>
      </div>
  )}

  const removeClassContent = () => {
    let classToRemove

    const removeClass = () => {
      const newClassList = {
        ...classList,
      }
      delete newClassList[classToRemove]
      updateColumnList(newClassList, 'class')
      setClassList(newClassList)

      handleCloseModal()
    }

    return (
    <div className="remove-class-content">
      <h2 id="transition-modal-title">Remove Class</h2>
      <FormControl>
        <InputLabel id="class-select-label">Class</InputLabel>
        <Select
          labelId="class-select-label"
          value={classToRemove}
          onChange={(event) => { classToRemove = event.target.value}}
        >
          {
            (Object.values(classList)).map(classItem => (
              <MenuItem value={classItem}>
                {classItem}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => removeClass()}
      >
        Remove
      </Button>
    </div>
  )}

  const addSectionContent = () => {
    let newSection

    const addSection = () => {
      const newSectionList = {
        ...sectionList,
        [newSection]: newSection
      }

      updateColumnList(newSectionList, 'section')
      setSectionList(newSectionList)

      handleCloseModal()
    }

    return (
    <div className="add-section-content">
      <h2 id="transition-modal-title">Add Section</h2>
        <TextField
        onBlur={(event) => {
          newSection = (event.target.value || '').trim()
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addSection()}
      >
        Add
      </Button>
    </div>
  )}

  const content = {
    addClass: addClassContent(),
    removeClass: removeClassContent(),
    addSection: addSectionContent()
  }

  return (
    <div className="teacher-list-content">
      <div className="teacher-list-content__actions">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal('addClass')}
        >
          Add Class
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal('removeClass')}
        >
          Remove Class
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal('addSection')}
        >
          Add Section
        </Button>
      </div>
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={!!modalContent}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!!modalContent}>
          <div className={classes.paper}>
            { content[modalContent] }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}