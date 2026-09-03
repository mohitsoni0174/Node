import { use, useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [allNotes, setAllNotes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //api call to save the note
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    setFormValues({
      title: "",
      description: "",
    });
  };

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allnotes");
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("Error fetching all notes:", error);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="min-h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes App</h1>

      <form
        onSubmit={handleSubmit}
        name="title"
        className="w-full max-w-xl border p-4 rounded-xl flex flex-col gap-3"
      >
        <input
          name="title"
          type="text"
          value={formValues.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 outline-none text-xl rounded border"
        />

        <textarea
          name="description"
          minLength={10}
          required
          value={formValues.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 outline-none text-xl rounded border min-h-32 resize-none"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded bg-black text-white hover:opacity-80"
        >
          Add Note
        </button>
      </form>

      <div>
        {allNotes.map((val) => (
          <NoteCard key={val._id} note={val} />
        ))}
      </div>
    </div>
  );
};

export default App;
