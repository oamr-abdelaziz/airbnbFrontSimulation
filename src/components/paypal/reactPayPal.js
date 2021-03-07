import {useState, useEffect, useRef} from "react";

export default function ReactPayPal(props) {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `subtotal: ${props.receipt.subTotal},
                serviceFee: ${props.receipt.serviceFee}`,
                amount: {
                  currency_code: "USD",
                  value: props.receipt.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          props.onCheckout(true);
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
            setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div className="text-success">Payment successful!</div>;
  }

  // If any error occurs
  if (error) {
    return <div className="text-danger">Error Occurred in processing payment! Please try again.</div>;
  }

  //   default render
  return (
    <div>
      <h4 className="pb-4">Total amount: ${props.receipt.total} </h4>
      <div ref={paypalRef} />
    </div>
  );
}
