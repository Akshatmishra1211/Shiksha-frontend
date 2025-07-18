import React, { useState, useMemo } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { IoCloseOutline } from "react-icons/io5"; // Imported Icons
import { FiSearch } from "react-icons/fi";
import { MdOutlineManageSearch } from "react-icons/md";


const Courses = () => {
  const { courses } = CourseData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on search term
  const filteredCourses = useMemo(() => {       // useMemo is a React Hook that caches the result of an expensive calculation — like filtering or sorting — and recomputes only when dependencies change.
    if (!searchTerm.trim()) {                   // if search bar is empty return all courses
      return courses;
    }

    return courses?.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||         // Converts the searchTerm and title,description etc to lowercase too .includes(...) checks if the search term is present in the title
      course.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [courses, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="courses">
      <div className="courses-header">
        <h2>Available Courses</h2>

        {/* Stylish Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <div className="search-icon">
              <FiSearch size={20} />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search courses by name, description, or category..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button className="clear-search" onClick={clearSearch}>
                <IoCloseOutline size={16} />
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="search-results-info">
              {filteredCourses?.length || 0} course
              {filteredCourses?.length !== 1 ? 's' : ''} found
            </div>
          )}
        </div>
      </div>

      <div className="course-container">
        {filteredCourses && filteredCourses.length > 0 ? (
          filteredCourses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : searchTerm ? (
          <div className="no-results">
            <div className="no-results-icon">
              <MdOutlineManageSearch size={55} />
            </div>
            <h3>No courses found</h3>
            <p>Try adjusting your search terms or browse all available courses.</p>
            <button className="clear-search-btn" onClick={clearSearch}>
              Clear Search
            </button>
          </div>
        ) : (
          <div className="no-courses">
            <h3>No Courses Yet!</h3>
            <p>Check back later for new courses.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
