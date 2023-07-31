import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const StudentList = ({ students, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the students to display on the current page
  const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (student) => {
    onEdit(student);
  };

  const handleDelete = (email) => {
    onDelete(email);
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        Student Information List
      </h2>
      <ul>
        {currentStudents.map((student, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {/* Display student information */}
            <strong style={{ fontWeight: "bold" }}>Name:</strong> {student.name}{" "}
            | <strong style={{ fontWeight: "bold" }}>Email:</strong>{" "}
            {student.email} |{" "}
            <strong style={{ fontWeight: "bold" }}>Phone:</strong>{" "}
            {student.phone} |{" "}
            <strong style={{ fontWeight: "bold" }}>Marks:</strong>{" "}
            {student.marks} |{" "}
            <strong style={{ fontWeight: "bold" }}>Pass/Fail:</strong>{" "}
            {student.pass ? "Pass" : "Fail"} | {/* Edit icon */}
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => handleEdit(student)}
              style={{ cursor: "pointer", marginRight: "5px" }}
            />
            {/* Delete icon */}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(student.email)}
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
      <div>
        {/* Implement the pagination buttons */}
        {Array.from({ length: Math.ceil(students.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#007bff", // Blue background color for buttons
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default StudentList;
