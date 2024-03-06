export async function getSelections() {
    try {
      const response = await fetch("http://localhost:3000/api/selection");
      const data = await response.json();
  
      //console.log(data);
  
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  export async function getTasks() {
    try {
      const response = await fetch("http://localhost:3000/api/nonRecur");
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 4000));
      console.log(data)
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }