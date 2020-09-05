import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import './PageList.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default () => {
  const classes = useStyles();
  const pages = [
    {
      image: 'https://img.freepik.com/free-photo/group-happy-young-students-university_85574-4531.jpg?size=626&ext=jpg',
      title: 'Students',
      description: 'Page to list, add, edit and delete students',
      path: '/student'
    },
    {
      image: 'https://blog.lucasgilbert.com.br/wp-content/uploads/2018/06/teacher-e-professor-lucas-gilbert.jpg',
      title: 'Teachers',
      description: 'Page to list, add, edit and delete teachers',
      path: '/teacher'
    }
  ]

  return (
    <ul className="page-list">
      { pages.map(({image, title, description, path}) => (
        <li key={title}>
          <Card className={classes.root}>
            <CardActionArea
              component={Link}
              to={path}
            >
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
      ))}
    </ul>
  )
}