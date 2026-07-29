import { useEffect, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { toast } from "react-toastify";

import {
    getMyProfile,
    updateMyProfile,
} from "../../services/profileApi";

function ProfileSettings() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        cnicNumber: "",
        designation: "",
        profilePicture: "",
        dateOfBirth: "",
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const res = await getMyProfile();

            setFormData({
                fullName: res.profile?.fullName || "",
                email: res.user?.email || "",
                phoneNumber: res.profile?.phoneNumber || "",
                cnicNumber: res.profile?.cnicNumber || "",
                designation: res.user?.designation || "",
                profilePicture:
                    res.profile?.profilePicture ||
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(
                        res.profile?.fullName || res.user?.email
                    ) +
                    "&background=7c3aed&color=fff",
                dateOfBirth: res.profile?.dateOfBirth
                    ? res.profile.dateOfBirth.substring(0, 10)
                    : "",
            });
        } catch (err) {
            console.log(err);
            toast.error("Failed to load profile");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        if (!formData.fullName.trim()) {
            return toast.error("Full Name is required");
        }

        if (!formData.phoneNumber.trim()) {
            return toast.error("Phone Number is required");
        }

        try {
            setLoading(true);

            await updateMyProfile({
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                cnicNumber: formData.cnicNumber,
                profilePicture: formData.profilePicture,
                dateOfBirth: formData.dateOfBirth,
            });

            toast.success("Profile Updated Successfully");

            loadProfile();
        } catch (err) {
            console.log(err);

            toast.error("Profile Update Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 p-4">

            <div className="d-flex align-items-center gap-2 mb-4">
                <FaUserCog
                    color="#7c3aed"
                    size={18}
                />

                <h5 className="fw-bold mb-0">
                    Profile Settings
                </h5>
            </div>

            <div className="row">

                <div className="col-md-4 text-center">

                    {/* <img
            src={formData.profilePicture}
            alt=""
            width="130"
            height="130"
            className="rounded-circle mb-3"
          /> */}


                    <img
                        src={
                            formData.profilePicture
                                ? formData.profilePicture
                                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    formData.fullName || formData.email || "User"
                                )}&background=7c3aed&color=fff`
                        }
                        alt="Profile"
                        width="130"
                        height="130"
                        className="rounded-circle mb-3"
                    />

                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Profile Picture URL"
                        name="profilePicture"
                        value={formData.profilePicture}
                        onChange={handleChange}
                    /> */}


                    <button
                        className="btn btn-outline-primary mt-2"
                        disabled
                    >
                        Upload Picture (Coming Soon)
                    </button>

                    <small className="text-muted d-block mt-2">
                        Image upload will be available in the next update.
                    </small>



                </div>

                <div className="col-md-8">

                    <div className="mb-3">

                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            className="form-control"
                            value={formData.email}
                            disabled
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Phone Number
                        </label>

                        <input
                            className="form-control"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            CNIC
                        </label>

                        <input
                            className="form-control"
                            name="cnicNumber"
                            value={formData.cnicNumber}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Designation
                        </label>

                        <input
                            className="form-control"
                            value={formData.designation}
                            disabled
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Date Of Birth
                        </label>

                        <input
                            type="date"
                            className="form-control"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className="btn text-white"
                        style={{
                            background: "#7c3aed",
                        }}
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {loading
                            ? "Saving..."
                            : "Save Changes"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProfileSettings;