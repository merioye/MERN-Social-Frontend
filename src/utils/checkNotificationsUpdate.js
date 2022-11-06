const checkNotificationsUpdate = async (
    userId,
    setUnreadNotificationsPresent
) => {
    try {
        const res = await fetch(
            `${
                process.env.REACT_APP_API_BASE_URL
            }/notifications/${userId}?type=${"other"}`,
            {
                credentials: "include",
            }
        );

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = await res.json();

        if (data.notification.isNotificationOpened === false) {
            setUnreadNotificationsPresent(true);
        }
    } catch (e) {
        console.log(e);
    }
};

export default checkNotificationsUpdate;
