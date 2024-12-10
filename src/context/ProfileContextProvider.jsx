import { useState } from "react";
import { ProfileContext } from "./ProfileContext";

const ProfileContextProvider = ({ children }) => {
    const [profile, setProfile] = useState(null); // Initialize profile state

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileContextProvider;
