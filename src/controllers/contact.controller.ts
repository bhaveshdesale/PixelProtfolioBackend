// import { Request, Response } from "express";
// import Message from "../models/Message";
// import { sendContactEmail } from "../utils/sendEmail";

// export const submitContactForm = async (req: Request, res: Response) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // 1️⃣ Save to DB
//     const newMessage = await Message.create({
//       name,
//       email,
//       message,
//     });

//     // 2️⃣ Send Email
//     await sendContactEmail(name, email, message);

//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       data: newMessage,
//     });
//   // } catch (error) {
//   //   console.error("Contact error:", error);
//   //   res.status(500).json({
//   //     success: false,
//   //     message: "Failed to send message",
//   //   });
//   // }
//    } catch (error: any) {
//     console.error("Contact error FULL:", error);
  
//     res.status(500).json({
//       success: false,
//       message: error?.message || "Failed to send message",
//       code: error?.code,
//       response: error?.response,
//     });
//   }
  
// };


//move towards the resend for the mail service
import { Request, Response } from "express";
import Message from "../models/Message";
import { sendContactEmail } from "../utils/sendEmail";

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to DB
    const savedMessage = await Message.create({
      name,
      email,
      message,
    });

    // Send Email (Resend)
    await sendContactEmail(name, email, message);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};
