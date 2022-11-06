const fetchProfileUser = async (profileUserId, navigate, setProfileUser) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/profile/${profileUserId}`,
            {
                method: "GET",
                credentials: "include",
            }
        );

        if (res.status === 401) {
            navigate("/login");
            throw new Error(res.statusText);
        } else if (!res.ok) {
            navigate("/");
            throw new Error(res.statusText);
        }

        const data = await res.json();
        setProfileUser(data.profileUser);
    } catch (e) {
        console.log(e);
    }
};

export default fetchProfileUser;
