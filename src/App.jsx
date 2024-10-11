import {useEffect, useState} from "react";

import {getTeachers} from "../firebase";

function App() {
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    getTeachers((data) => {
      setTeachers(data);
    });
  }, []);

  return <></>;
}

export default App;
