import api from "./api";

export const getMyProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await api.get("/profile/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};


export const updateMyProfile = async (profileData) => {
  const token = localStorage.getItem("token");

  const res = await api.put(
    "/profile/update",
    profileData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};