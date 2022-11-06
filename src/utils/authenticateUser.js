// get user data
const authenticateUser = async (setUser, navigate) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/authenticate`,
            {
                credentials: "include",
            }
        );

        if (!res.ok) {
            navigate("/login");
            throw new Error(res.statusText);
        }

        const data = await res.json();
        setUser(data.user);
    } catch (e) {
        console.log(e);
    }
};

export default authenticateUser;
