import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//stateless functional component
//Always return JSX

// function Greeting(){
// return <h4>This is Ashvin and this is my  first programm</h4>
// }

// function Greeting(){
// return <h4>Hello to Ashvin's World</h4>
// }

// function Greeting() {
//   return (
//     <div>
//       <h4>Hello to Ashvin's World</h4>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello to Ashvin's World")
//   );
// };

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello to Ashvin's World");
// };

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h4>Hello to Ashvin's World</h4>
//         <ul>
//           <li>
//             <a href="#"> Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <div></div>
//     </>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Ashvin Manwar</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// ReactDOM.render(<Greeting />, document.getElementById("root"));

const author = "Taylor Jenkins Reid";
const title = "Daisy Jones & The Six";
const img = "./images/book-1.jpg";

// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// arguments
someFunc("job", "developer");

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>;{/* <h4>{author.toUpperCase()} </h4>; */}
      {/* <Image />  <Title /> <Author /> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// ReactDOM.render(<BookList />, document.getElementById("root"));

// const Image = () => (
//   <img src="./images/book-1.jpg" alt="Daisy Jones & The Six" />
// );
// const Title = () => {
//   return <h2>Daisy Jones & The Six</h2>;
// };
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}> Taylor Jenkins Reid </h4>;
// };

// <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//   Taylor Jenkins Reid{" "}
// </h4>
