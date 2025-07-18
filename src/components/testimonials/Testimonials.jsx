import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [     // object that contain various data
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
    },
    {
      id: 2,
      name: "Janvi Kapoor",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=",
    },
    {
      id: 3,
      name: "Yash Singh",
      position: "Student",
      message:
        "I loved how easy to follow and well-structured the courses were. Loved the experience!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MGHSrmaYy5I9XSKlqEhjYPEz5aM0C621DQ&s",
    },
    {
      id: 4,
      name: "Diya Sharma",
      position: "Student",
      message:
        "This platform made learning so enjoyable! The content is well-structured, and the real-world examples really helped me understand everything better.",
      image:
        "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.jpg?s=612x612&w=0&k=20&c=cstb2dGLkOJSfRt9TBEj2G9hfYyIR8mYuBWdZZStsbc=",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (      // a type of loop to iterate over all the elements of the object
          <div className="testimonial-card" key={e.id}>   {/* for different ids */}
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
