import Enquiry from "../models/Enquiry.js";

export const getRecentEnquiries = async (
  req,
  res
) => {

  try {

    const enquiries =
      await Enquiry.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.status(200).json({
      success: true,
      enquiries,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};