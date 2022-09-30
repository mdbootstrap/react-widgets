import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Calendar</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/calendar.webp"
              className="w-100"
              alt="React Calendar Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/calendar/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Cookies management</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/cookies-management.webp"
              className="w-100"
              alt="React Cookies Management Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/cookies-management/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Drag and drop</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/drag-and-drop.webp"
              className="w-100"
              alt="React Drag and drop Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/drag-and-drop/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>File upload</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/file-upload.webp"
              className="w-100"
              alt="React File Upload Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/file-upload/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Filters</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/filters.webp"
              className="w-100"
              alt="React Filters Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/filters/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Mention</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/mention.webp"
              className="w-100"
              alt="React Mention Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/mention/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Storage management</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/storage-management.webp"
              className="w-100"
              alt="React Storage Management Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/storage-management/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Table editor</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/table-editor.webp"
              className="w-100"
              alt="React Table Editor Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/table-editor/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Tree view</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/tree-view.webp"
              className="w-100"
              alt="React Tree View Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/tree-view/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg={3} md={6} className="mb-4">
          <p className="mb-3">
            <strong>Vector maps</strong>
          </p>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="dark"
          >
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/react/pro/_main/assets/plugins/vector-maps.webp"
              className="w-100"
              alt="React Vector Maps Plugin"
            />
            <a href="https://mdbootstrap.com/docs/react/plugins/vector-maps/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
