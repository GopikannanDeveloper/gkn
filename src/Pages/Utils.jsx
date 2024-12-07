import toast from "react-hot-toast";

export const copyToClipboard = async (text) => {
    try {
      toast.promise(navigator.clipboard.writeText(text), {
        loading: "Saving...",
        success: <b>Copied!</b>,
        error: <b>Could not save.</b>,
      })
    } catch (error) {
      console.error("Failed to copy: ", error);
      alert("Failed to copy email. Please try again.");
    }
  };