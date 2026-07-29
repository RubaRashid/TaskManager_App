import {
  getMyProfile,
  updateProfile,
} from "../../services/profileApi";

import { toast } from "react-toastify";


const handleSave = async () => {
  try {
    const res = await updateProfile({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      cnicNumber: formData.cnicNumber,
      dateOfBirth: formData.dateOfBirth,
      designation: formData.designation,
    });

    toast.success(res.message);

    loadProfile();
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Profile update failed"
    );
  }
};









// import react from "react"
// function SecuritySettings() {
//   return (
//     <> 

//     <h1 className="text-center">Notification Settings</h1>
//     </>
    
//   );
// }

// export default SecuritySettings;