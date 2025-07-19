import React, { useState, useMemo } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on search term
  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) {
      return courses;
    }
    
    return courses?.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  console.log(courses);

  return (
    <div className="courses">
      <div className="courses-header">
        <h2>Available Courses</h2>
        
        {/* Stylish Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
              </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="search-results-info">
              {filteredCourses?.length || 0} course{filteredCourses?.length !== 1 ? 's' : ''} found
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
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="2"/>
              </svg>
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
