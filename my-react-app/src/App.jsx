import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

import user1 from "./assets/avatars/user1.jpg";
import user2 from "./assets/avatars/user2.jpg";
import user3 from "./assets/avatars/user3.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Muhammad Adnan",
      bio: "Frontend Developer | React Intern",
      avatar: user1,
      isFollowed: false,
    },
    {
      id: 2,
      name: "Ali Khan",
      bio: "UI/UX Designer",
      avatar: user2,
      isFollowed: false,
    },
    {
      id: 3,
      name: "Sara Ahmed",
      bio: "JavaScript Learner",
      avatar: user3,
      isFollowed: false,
    },
  ]);

  // Follow / Unfollow
  const toggleFollow = (id) => {
    setProfiles(
      profiles.map((user) =>
        user.id === id
          ? { ...user, isFollowed: !user.isFollowed }
          : user
      )
    );
  };

  // Log follow changes (useEffect)
  useEffect(() => {
    console.log("Follow status updated:", profiles);
  }, [profiles]);

  // Search filter
  const filteredProfiles = profiles.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Dynamic Profile Card App</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredProfiles.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            bio={user.bio}
            avatar={user.avatar}
            isFollowed={user.isFollowed}
            onFollow={() => toggleFollow(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
