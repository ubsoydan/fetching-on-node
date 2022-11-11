import axios from "axios";

const getData = async function (usernum) {
  const { data: getUser } = await axios(
    `https://jsonplaceholder.typicode.com/users/${usernum}`
  );

  const { data: getPost } = await axios(
    `https://jsonplaceholder.typicode.com/posts?id=${usernum}`
  );

  let merged = {
    ...getUser,
    ...getPost,
  };
  return console.log(merged);
};

export default getData;
