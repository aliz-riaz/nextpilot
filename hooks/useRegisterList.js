import { instance } from "@/axios/instance"; // Import the Axios instance

async function useRegisterList() {
  let response;
  // GET request with headers
  await instance
    .get("/posts")
    .then((res) => {
      // Handle the successful response here
      console.log("GET response:", res.data);
      response = res.data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error("GET error:", error);
      response = error;
    });
  return response;
}
export default useRegisterList;
