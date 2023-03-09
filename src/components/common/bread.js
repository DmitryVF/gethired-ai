import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from "@material-ui/core/Link";

const getPaths = (routes, parentPath) => (
  routes.reduce((acc, curr) => (
    curr.path === parentPath ? [...getPaths(routes, curr.parentPath), curr, ...acc] : acc
  ), [])
);

const LinkRouter = props => <Link {...props} component={RouterLink} />;

function Bread({ routes }) {
  const location = useLocation();

  const paths = useMemo(() => (
    getPaths(routes, location.pathname)
  ), [routes, location.pathname]);

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {paths.map(({ path, name }, index) => (
        index === paths.length - 1 ? (
          <Typography color="textPrimary" variant="body2" key={path}>{name}</Typography>
        ) : (
          <LinkRouter color="inherit" variant="body2" to={path} key={path}>{name}</LinkRouter>
        )
      ))}
    </Breadcrumbs>
  )
}

Bread.defaultProps = {
  routes: []
};

const { arrayOf, shape, string } = PropTypes;

Bread.propTypes = {
  routes: arrayOf(shape({
    name: string,
    path: string,
    parentPath: string
  }))
};

export default Bread;
