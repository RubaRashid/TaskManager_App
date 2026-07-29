import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Profile() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/profile/me");

      setUser(res.data.user);

      setProfile(res.data.profile);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h3 className="fw-bold mb-1">
            My Profile
          </h3>

          <p className="text-muted mb-0">
            View your personal information
          </p>

        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/settings")}
        >
          <FaUserEdit className="me-2" />
          Edit Profile
        </button>

      </div>

      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-5">

          <div className="row">

            {/* LEFT */}

            <div className="col-lg-4 text-center">

              <img
                src={
                  profile?.profilePicture ||
                  "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(
                      profile?.fullName ||
                        user?.email
                    ) +
                    "&background=7c3aed&color=fff&size=256"
                }
                alt="Profile"
                className="rounded-circle border"
                width="180"
                height="180"
              />

              <h4 className="mt-4 fw-bold">
                {profile?.fullName || "No Name"}
              </h4>

              <span className="badge bg-primary px-3 py-2 mt-2">
                {user?.role}
              </span>

            </div>

            {/* RIGHT */}

            <div className="col-lg-8">

              <div className="row g-4">

                <div className="col-md-6">

                  <label className="text-muted">
                    Email
                  </label>

                  <h6 className="fw-semibold">
                    {user?.email}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    Designation
                  </label>

                  <h6 className="fw-semibold">
                    {user?.designation}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    Phone Number
                  </label>

                  <h6 className="fw-semibold">
                    {profile?.phoneNumber || "-"}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    CNIC
                  </label>

                  <h6 className="fw-semibold">
                    {profile?.cnicNumber || "-"}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    Date of Birth
                  </label>

                  <h6 className="fw-semibold">
                    {profile?.dateOfBirth
                      ? new Date(
                          profile.dateOfBirth
                        ).toLocaleDateString()
                      : "-"}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    Status
                  </label>

                  <h6 className="fw-semibold">
                    {user?.status}
                  </h6>

                </div>

                <div className="col-md-6">

                  <label className="text-muted">
                    Member Since
                  </label>

                  <h6 className="fw-semibold">
                    {new Date(
                      user?.createdAt
                    ).toLocaleDateString()}
                  </h6>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;

