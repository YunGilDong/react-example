import React from 'react';
import { Badge } from 'reactstrap';

const Badge_test = (props) => {
  return (
    <div>
      <Badge color="primary">통신</Badge>
      <Badge color="secondary">수동</Badge>
      <Badge color="success">점멸</Badge>
      <Badge color="danger">소등</Badge>
      <Badge color="warning">모순</Badge>
    </div>
  );
}

export default Badge_test;