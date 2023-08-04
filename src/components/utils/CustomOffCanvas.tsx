import React, { FC, useState } from 'react';

import { Offcanvas } from 'react-bootstrap';

interface Props {
  activateElement: React.ReactNode;
  title: string;
  body: React.ReactNode;
  buttonVariant?: string;
  position: 'start' | 'end';
}

const CustomOffCanvas: FC<Props> = ({
  activateElement,
  title,
  body,
  position
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>{activateElement}</div>

      <Offcanvas show={show} placement={position} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>{body}</>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomOffCanvas;
