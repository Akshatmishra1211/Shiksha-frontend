import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";       // in components we make functions which used multiple times in many files

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)    // like a for loop where e denotes each course in courses
        ) : (
          <p>No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
