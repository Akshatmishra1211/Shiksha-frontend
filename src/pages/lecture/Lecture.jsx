import React, { useEffect, useState } from "react";
import "./lecture.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import { IoCheckmarkSharp } from "react-icons/io5";


const Lecture = ({ user }) => {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setvideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  async function fetchLectures() {
    try {
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {    // to return all lectures of a course with id
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/lecture/${id}`, {     // to return the leture with id 
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];       // get the first file
    const reader = new FileReader();      // built-in JavaScript class used to read files locally

    reader.readAsDataURL(file);     // read the file and convert it into a base64 string. This format is good for showing a preview of the video before uploading.

    reader.onloadend = () => {     // when the file is readed
      setVideoPrev(reader.result);  // .result shows preview of file before uploading
      setvideo(file);
    };
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setvideo("");
      setVideoPrev("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

    const [completed, setCompleted] = useState(0);        // percentage of completed lectures
    const [completedLec, setCompletedLec] = useState(0);  // no. of completed lectures
    const [lectLength, setLectLength] = useState(0);      // total no. of lectures
    const [progress, setProgress] = useState([]);
  
    async function fetchProgress() {
      try {
        const { data } = await axios.get(
          `${server}/api/user/progress?course=${params.id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
  
        setCompleted(data.courseProgressPercentage);    // we made in backend->course.js
        setCompletedLec(data.completedLectures);
        setLectLength(data.allLectures);
        setProgress(data.progress);
      } catch (error) {
        console.log(error);
      }
    }
  
    const addProgress = async (id) => {
      try {
        const { data } = await axios.post(
          `${server}/api/user/progress?course=${params.id}&lectureId=${id}`,     // with course id and lecture id
          {},               // sending empty body because route will direct to backend
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        console.log(data.message);
        fetchProgress();
      } catch (error) {
        console.log(error);
      }
    };
  
    console.log(progress);

  useEffect(() => {
      fetchLectures();
      fetchProgress();
    }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="progress">
          Lecture completed - {completedLec} out of {lectLength} <br />
          <progress value={completed} max={100}></progress> {Math.floor(completed)} %   {/* progress is a tag in html to show progress bar which shows value in the variable "completed" */}
          </div>
          <div className="lecture-page">
            <div className="left">
              {lecLoading ? (
                <Loading />
              ) : (
                <>
                  {lecture.video ? (
                    <>
                      <video
                        src={`${server}/${lecture.video}`}
                        width={"98%"}
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        autoPlay
                        onEnded={() => addProgress(lecture._id)}
                      ></video>
                      <h1>{lecture.title}</h1>
                      <h3>{lecture.description}</h3>
                    </>
                  ) : (
                    <h1>Please Select a Lecture</h1>
                  )}
                </>
              )}
            </div>
            <div className="right">
              {user && user.role === "admin" && (
                <button className="common-btn" onClick={() => setShow(!show)}>
                  {show ? "Close" : "Add Lecture +"}
                </button>
              )}

              {show && (
                <div className="lecture-form">
                  <h2>Add Lecture</h2>
                  <form onSubmit={submitHandler}>
                    <label htmlFor="text">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />

                    <label htmlFor="text">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />

                    <input
                      type="file"
                      placeholder="choose video"
                      onChange={changeVideoHandler}
                      required
                    />

                    {videoPrev && (
                      <video
                        src={videoPrev}   // url that we stored 
                        alt=""
                        width={300}
                        controls
                      ></video>
                    )}

                    <button
                      disabled={btnLoading}
                      type="submit"
                      className="common-btn"
                    >
                      {btnLoading ? "Please Wait..." : "Add"}
                    </button>
                  </form>
                </div>
              )}

              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <>
                    <div
                      onClick={() => fetchLecture(e._id)}   // function defined above
                      key={i}
                      className={`lecture-number ${       // classname = "lecture-number" but if curr lecture_id==lecture's id then the classname = "lecture-name active"
                        lecture._id === e._id && "active"
                      }`}
                    >
                      {i + 1}. {e.title}{" "}   {/* i+1 convert 0 index to 1  and shows output-> 1."tittle.." */}
                      {progress[0] &&
                        progress[0].completedLectures.includes(e._id) && (    // if completedlectures array includes current lecture
                        <span
                          style={{
                            background: "green",
                            padding: "4px 4px",
                            borderRadius: "6px",
                            color: "white",
                          }}
                        >
                        <IoCheckmarkSharp />
                        </span>
                      )}
                    </div>
                    {user && user.role === "admin" && (
                      <button
                        className="common-btn"
                        style={{ background: "red" }}
                        onClick={() => deleteHandler(e._id)}
                      >
                        Delete    {/* {e.title} to show lecture name also*/}
                      </button>
                    )}
                  </>
                ))
              ) : (
                <p>No Lectures Yet!</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lecture;
