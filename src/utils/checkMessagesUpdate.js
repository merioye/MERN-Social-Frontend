const checkMessagesUpdate = async (userId, setUnreadMessagesPresent) => {
    try {
        const res = await fetch(
            `${
                process.env.REACT_APP_API_BASE_URL
            }/notifications/${userId}?type=${"message"}`,
            {
                credentials: "include",
            }
        );

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = await res.json();

        if (
            data.notification &&
            data.notification.isNotificationOpened === false
        ) {
            setUnreadMessagesPresent(true);
        }
    } catch (e) {
        console.log(e);
    }
};

export default checkMessagesUpdate;
