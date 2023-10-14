import Stripe from 'stripe';
// import {useBody} from 'h3'
const stripe = new Stripe(
  'sk_test_51NGs5RHuckKO2kHQyttfEjrxeMQQPuAbKuQqwQrijTfsEdQmAMxeWs4rWQbGVWbdcHs23x1kegUtOMmryIA5tDJf00NhwSmqHP',
  {
    apiVersion: '2020-08-27',
  }
);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: body.productName,
              images: [body.image],
            },
            unit_amount: body.amount * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: body.email,
      metadata: {
        productName: body.productName,
        fullName: body.fullName,
        uid: body.uid,
        bookingId: body.bookingId,
        adsId: body.adsid,
        paymentRef: body.paymentRef,
        timetableId: body.timetableId,
        amount: body.amount,
      },
      mode: 'payment',
      success_url: 'http://secrzetroom.vercel.app/',
      cancel_url: 'http://secrzetroom.vercel.app/',
    });
    return {url: session.url };
  } catch (err) {
    console.log(err)
    return err;
  }
});
