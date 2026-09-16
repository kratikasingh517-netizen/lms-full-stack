import { Webhook } from "svix";
import User from "../models/User.js";
import stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";

// API Controller Function to Manage Clerk User with Database
export const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with Clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify Clerk webhook headers
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // Get data from request body
    const { data, type } = req.body;

    // Handle different Clerk events
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
          resume: "",
        };

        await User.create(userData);

        console.log("Clerk user created in MongoDB:", data.id);

        return res.status(200).json({ success: true });
      }

      case "user.updated": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
          resume: "",
        };

        // Update the user if it exists.
        // Create the user if it doesn't exist.
        await User.findByIdAndUpdate(
          data.id,
          userData,
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );

        console.log("Clerk user updated/synced in MongoDB:", data.id);

        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);

        console.log("Clerk user deleted from MongoDB:", data.id);

        return res.status(200).json({ success: true });
      }

      default: {
        console.log(`Unhandled Clerk event type: ${type}`);

        return res.status(200).json({
          success: true,
          message: "Event received but not handled",
        });
      }
    }
  } catch (error) {
    console.error("Clerk Webhook Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Stripe Gateway Initialize
const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

// Stripe Webhooks to Manage Payments
export const stripeWebhooks = async (request, response) => {
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle Stripe events
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      // Get Checkout Session metadata
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { purchaseId } = session.data[0].metadata;

      const purchaseData = await Purchase.findById(purchaseId);
      const userData = await User.findById(purchaseData.userId);
      const courseData = await Course.findById(
        purchaseData.courseId.toString()
      );

      courseData.enrolledStudents.push(userData);
      await courseData.save();

      userData.enrolledCourses.push(courseData._id);
      await userData.save();

      purchaseData.status = "completed";
      await purchaseData.save();

      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      // Get Checkout Session metadata
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { purchaseId } = session.data[0].metadata;

      const purchaseData = await Purchase.findById(purchaseId);

      purchaseData.status = "failed";
      await purchaseData.save();

      break;
    }

    default:
      console.log(`Unhandled Stripe event type: ${event.type}`);
  }

  // Return response to acknowledge receipt
  return response.json({ received: true });
};
