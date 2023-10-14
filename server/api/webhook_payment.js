import Stripe from 'stripe';
import getRawBody from 'raw-body';
import { crud } from '../firebase/index';
const stripe = new Stripe(
  'sk_test_51NGs5RHuckKO2kHQyttfEjrxeMQQPuAbKuQqwQrijTfsEdQmAMxeWs4rWQbGVWbdcHs23x1kegUtOMmryIA5tDJf00NhwSmqHP',
  {
    apiVersion: '2020-08-27',
  }
);

export default defineEventHandler(async (event) => {
  try {
    let body = await getRawBody(event.node.req);
    // raw_data = Buffer.concat(body).toString();
    const endpointSecret = 'whsec_7PrejssGhU1ELNXxmkOHegfJtDz1Wu4Y';
    const sig = event.node.req.headers['stripe-signature'];
    let events = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    if (!events) {
      throw createError({
        statusCode: 400,
        statusMessage: 'WebHook Err',
      });
    }
    setResponseStatus(event, 200);
    if (events.type === 'checkout.session.completed') {
      await crud.updateDocument('BOOKINGS', events.data.object.metadata.bookingId, {
        bookingStatus: 'active',
      });
      await crud.updateDocument('TIMETABLE', events.data.object.metadata.timetableId, {
        booked: true,
      });
    }

    return { status: 200 };
  } catch (err) {
    console.log(err);
    return err;
  }
});
